<template>
  <div class="colorpicker">
    <p>{{userInfo}}</p>
    <input placeholder="Name" type="color" v-model="newColor">
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  data: () => ({
    newName: "",
    newColor: ""
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
    },
    saveColor() {
      this.$store.commit("saveColor", this.newColor);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
