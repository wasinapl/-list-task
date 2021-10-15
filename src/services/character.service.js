import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";

class CharacterService {
  getAll() {
    return axios.get(API_URL + "/character").then((response) => {
      return response.data;
    });
  }
  updatePage(page, filters) {
    const query = Object.keys(filters)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(filters[key]);
      })
      .join("&");
    return axios
      .get(`${API_URL}/character/?page=${page}&${query}`)
      .then((response) => {
        return response.data;
      });
  }
  searchWithFilter(filters) {
    const query = Object.keys(filters)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(filters[key]);
      })
      .join("&");
    return axios
      .get(`${API_URL}/character/?${query}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  }
}

export default new CharacterService();
