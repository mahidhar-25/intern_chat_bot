<template>
  <div class="ChatFoot">
    <p>symbol</p>
    <input type="text" v-model="message" @keyup.enter="SendMessage" />
    <button class="EnterButton" @click="SendMessage()">Enter</button>
  </div>
</template>

<script>
export default {
  emits: ["sentmessage"],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    SendMessage() {
      this.$emit("sentmessage", this.message);
      this.message = "";
    },
  },
};
</script>

<style scoped>
.ChatFoot {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px;
  color: black;
  background-color: #c2c2c2;
  position: static;
}
input {
  background-color: #d9d9d9;
  width: 70%;
  padding: 12px;
  margin: 7px;
  border: 1px solid #d9d9d9;
}

.EnterButton {
  text-align: center;
  padding: 10px;
  width: 100px;
  background-color: #f54949;
  color: white;
  border: none;
  margin-left: 7px;
  margin-right: 7px;
}
</style>
