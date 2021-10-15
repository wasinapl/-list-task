<template>
  <el-card class="box-card">
    <img :src="character.image" class="image" />
    <div style="padding: 5px">
      <h3>{{ character.name }}</h3>
    </div>
    <div>
      <span>Status: {{ character.status }}</span>
    </div>
    <div>
      <span>Species: {{ character.species }}</span>
    </div>
    <div>
      <span>Type: {{ character.type != "" ? character.type : "-" }}</span>
    </div>
    <div>
      <span>Gender: {{ character.gender }}</span>
    </div>
    <div>
      <span>Created: {{ moment(character.created).format('MMM Do YY, h:mm:ss a') }}</span>
    </div>
  </el-card>
</template>

<script>
import moment from "moment";

export default {
  name: "Character",
  props: ["character"],
  setup() {
    return { moment };
  },
};
</script>

<style scoped>
el-card {
  margin-bottom: 50px;
}
</style>
