<template>
  <div class="coolform">
    <InputField v-bind:userInfo="user.name"/>
    <InputField v-bind:userInfo="user.car"/>
    <ColorPicker/>
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
import ColorPicker from "@/components/ColorPicker.vue";

export default {
  name: "CoolForm",
  components: {
    InputField,
    ColorPicker
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    console.log(this.$store.state.user.name);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
