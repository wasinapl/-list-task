<template>
  <el-row :gutter="20" justify="center" v-if="characters">
    <el-col
      :xs="24"
      :sm="12"
      :md="12"
      :lg="8"
      :xl="6"
      v-for="character in characters"
      :key="character.id"
      ><Character :character="character"
    /></el-col>
  </el-row>
  <el-row :gutter="20" justify="center" v-if="!characters">
    <el-col
      :xs="24"
      :sm="12"
      :md="12"
      :lg="12"
      :xl="12"
      >
      <el-alert title="Not found characters with this filters" type="error" center show-icon :closable="false"> </el-alert>
      </el-col>
  </el-row>

</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Character from "./Character.vue";

export default {
  name: "CharacterList",
  components: { Character },
  setup() {
    const store = useStore();
    const characters = computed(() => store.getters.getCharacters);

    onMounted(() => {
      store.dispatch("getCharacters");
    });

    return { characters };
  },
};
</script>

<style scoped>
.el-col{
  margin-bottom: 20px;
}
</style>
