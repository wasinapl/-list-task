<template>
  <div id="pagination">
    <el-button
      icon="el-icon-arrow-left"
      :disabled="pagesInfo.currentPage < 2"
      @click="updatePage(pagesInfo.currentPage - 1)"
      >Previous Page</el-button
    >
    <span style="margin:10px;">{{
      `${pagesInfo.currentPage} of ${pagesInfo.pages} `
    }}</span>
    <el-button
      :disabled="pagesInfo.currentPage == pagesInfo.pages"
      @click="updatePage(pagesInfo.currentPage + 1)"
      >Next Page<i class="el-icon-arrow-right el-icon-arrow-right"></i
    ></el-button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Pagination",
  setup() {
    const store = useStore();
    const pagesInfo = computed(() => store.getters.getPagesInfo);

    const updatePage = (page) => {
      store.dispatch("updatePage", page);
    };

    return { pagesInfo, updatePage };
  },
};
</script>

<style scoped>
.el-button-group {
  margin-right: 10px;
}

#pagination {
  position: fixed;
  width: 100%;
  height: 50px;
  background: white;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(77, 77, 85, 0.699) 0px 7px 29px 0px;
}
</style>
