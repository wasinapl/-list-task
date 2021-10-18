<template>
  <el-card
    class="box-card card-custom"
    style="width: 300px"
    :body-style="{ padding: '0px', 'padding-bottom': '20px' }"
  >
    <el-image :src="character.image" fit="fill"></el-image>
    <div style="padding: 5px">
      <h3>{{ character.name }}</h3>
    </div>
    <div>
      <span><b>Status:</b> {{ character.status }}</span>
    </div>
    <div>
      <span><b>Species:</b> {{ character.species }}</span>
    </div>
    <div>
      <span
        ><b>Type:</b> {{ character.type != "" ? character.type : "-" }}</span
      >
    </div>
    <div>
      <span><b>Gender:</b> {{ character.gender }}</span>
    </div>
    <div>
      <span
        ><b>Created:</b>
        {{ moment(character.created).format("MMM Do YY, h:mm:ss a") }}</span
      >
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
.card-custom {
  background: rgb(9, 50, 124);
  background: rgb(22, 33, 54);
  color: white;
  border: 0px;
}
</style>
