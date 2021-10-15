<template>
  <div id="option-container">
    <el-row class="demo-autocomplete">
      <el-col :xs="24" :lg="6" class="center">
        <div>Search by name:</div>
        <el-input
          v-model="name"
          class="inline-input"
          style="width:200px"
          placeholder="Name"
        />
        <el-button @click="searchByName">Search</el-button>
      </el-col>
      <el-col :xs="24" :lg="6" class="center">
        <div>Status:</div>
        <el-select v-model="status" placeholder="Select">
          <el-option
            v-for="status in statuses"
            :key="status.id"
            :label="status.name"
            :value="status.name"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :xs="24" :lg="6" class="center">
        <div>Gender:</div>
        <el-select v-model="gender" placeholder="Select">
          <el-option
            v-for="gender in genders"
            :key="gender.id"
            :label="gender.name"
            :value="gender.name"
          >
          </el-option> </el-select
      ></el-col>
      <el-col :xs="24" :lg="6">
        <div class="center" style="height: 100%">
          <el-button type="danger" plain @click="reset">Reset</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "Options",
  setup() {
    const store = useStore();
    const name = ref("");
    const status = ref("");
    const statuses = [
      {
        id: 1,
        name: "alive",
      },
      {
        id: 2,
        name: "dead",
      },
      {
        id: 3,
        name: "unknown",
      },
    ];
    const gender = ref("");
    const genders = [
      {
        id: 1,
        name: "female",
      },
      {
        id: 2,
        name: "male",
      },
      {
        id: 3,
        name: "genderless",
      },
      {
        id: 4,
        name: "unknown",
      },
    ];

    watch(status, (newStatus) => {
      store.dispatch("filterStatus", newStatus);
    });

    watch(gender, (newGender) => {
      store.dispatch("filterGender", newGender);
    });

    const searchByName = () => {
      store.dispatch("searchByName", name.value);
    };

    const reset = () => {
        name.value = '';
        status.value = '';
        gender.value = '';
        store.dispatch("getCharacters");
    }

    return { name, status, statuses, gender, genders, searchByName, reset };
  },
};
</script>

<style>
#option-container {
  color: white;
}
.center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.center > * {
  margin: 10px;
}
</style>
