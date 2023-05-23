<template>
  <div class="AllGroups EachGroup">
    <div v-for="(value, key, index) in AllGroups" :key="index" class="GroupBar">
      <chat-bar :name="key" @click="OpenChat(key)"></chat-bar>
    </div>
  </div>
</template>

<script>
import ChatBar from "../UI/ChatBar.vue";
export default {
  props: ["AllGroups"],
  emits: ["group"],
  components: {
    ChatBar,
  },
  methods: {
    OpenChat(key) {
      this.$emit("group", key);
      console.log(key);
    },
  },
};
</script>

<style scoped>
.AllGroups {
  flex: 0.3 1 auto;
  /* #e7e3e3 */
  background-color: #e7e3e3;
  min-height: 99%;
}

.EachGroup {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
}

.GroupBar {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
