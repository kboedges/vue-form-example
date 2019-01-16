<template>
  <div class="coolform">
    <InputField v-bind:userInfo="user.name"/>
    <InputField v-bind:userInfo="user.car"/>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
