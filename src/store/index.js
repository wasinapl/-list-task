import { createStore } from "vuex";
import CharacterService from "../services/character.service";

const state = {
  info: {},
  characters: [],
  filters: {},
  currentPage: 1,
  loadingStatus: false,
};

export default createStore({
  state,
  getters: {
    getCharacters: (state) => state.characters,
    getPagesInfo: (state) => ({
      pages: state.info.pages,
      currentPage: state.currentPage,
    }),
    getLoadingStatus: (state) => state.loadingStatus,
  },
  actions: {
    getCharacters({ commit, state }) {
      commit("SET_LOADING_STATUS", true);
      state.filters = {};
      CharacterService.getAll().then((data) => {
        commit("SET_CHARACTERS", data);
        commit("SET_LOADING_STATUS", false);
      });
    },
    updatePage({ commit, state }, page) {
      commit("SET_LOADING_STATUS", true);
      CharacterService.updatePage(page, state.filters).then((data) => {
        commit("CHANGE_PAGE", { characters: data.results, page });
        commit("SET_LOADING_STATUS", false);
      });
    },
    searchByName({ commit, state }, name) {
      commit("SET_LOADING_STATUS", true);
      state.filters.name = name;
      searchWithFilter(commit, state);
    },
    filterStatus({ commit, state }, status) {
      commit("SET_LOADING_STATUS", true);
      state.filters.status = status;
      searchWithFilter(commit, state);
    },
    filterGender({ commit, state }, gender) {
      commit("SET_LOADING_STATUS", true);
      state.filters.gender = gender;
      searchWithFilter(commit, state);
    },
  },
  mutations: {
    SET_CHARACTERS(state, { info, results }) {
      state.info = info;
      state.characters = results;
      state.currentPage = 1;
    },
    CHANGE_PAGE(state, { characters, page }) {
      state.characters = characters;
      state.currentPage = page;
    },
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    NOT_FOUND(state) {
      state.characters = [];
      state.currentPage = 1;
      state.pages = 1;
    },
  },
});

function searchWithFilter(commit, state) {
  CharacterService.searchWithFilter(state.filters)
    .then((data) => {
      commit("SET_CHARACTERS", data);
      commit("SET_LOADING_STATUS", false);
    })
    .catch((err) => {
      console.error(err);
      commit("NOT_FOUND");
    });
}
