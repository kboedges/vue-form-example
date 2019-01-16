<template>
  <div class="input">
    <p>{{userInfo}}</p>
    <input placeholder="Name" type="text" v-model="newName">
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  name: "InputField",
  data: () => ({
    newName: ""
  }),
  props: {
    userInfo: String
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    save() {
      this.$store.commit("saveName", this.newName);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
