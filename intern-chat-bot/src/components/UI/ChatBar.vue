<template>
  <div class="ChatBar">
    <name-logo :text="GetFirstLetter" :radius="GetRadius"></name-logo>
    <p class="GroupName">{{ name }}</p>
  </div>
</template>

<script>
import NameLogo from "./NameLogo.vue";
export default {
  props: ["name"],
  components: {
    NameLogo,
  },
  computed: {
    GetFirstLetter() {
      return this.name[0];
    },
    GetRadius() {
      return "28px";
    },
  },
};
</script>

<style scoped>
.ChatBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  color: black;
  background-color: #d9d9d9;
}
.GroupName {
  margin-left: 10px;
}
</style>
