<template>
  <el-row class="row-bg" justify="center" style="margin-bottom:10px">
    <el-col :xs="22" :sm="20" :md="20" :lg="18" :xl="18"><Options /></el-col>
  </el-row>
  <el-row class="row-bg" justify="center" style="margin-bottom:50px">
    <el-col :xs="22" :sm="20" :md="20" :lg="18" :xl="18"
      >
      <CharacterList/>
      </el-col>
  </el-row>
  <Pagination />
</template>

<script>
import CharacterList from "./components/CharacterList.vue";
import Pagination from "./components/Pagination.vue";
import Options from "./components/Options.vue";
import { ElLoading } from "element-plus";
import { computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    CharacterList,
    Pagination,
    Options,
  },
  setup() {
    var loading;
    const store = useStore();
    const loadingStatus = computed(() => store.getters.getLoadingStatus);

    watch(loadingStatus, (newStatus) => {
      if (newStatus) openFullScreen();
      else closeFullScreen();
    });

    const openFullScreen = () => {
      loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
    };

    const closeFullScreen = () => {
      if (loading) loading.close();
    };

    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #25292c;
}
</style>
