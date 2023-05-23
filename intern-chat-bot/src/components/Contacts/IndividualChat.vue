<template>
  <div class="ChatBody individualchat">
    <div class="staticchat">
      <chat-bar :name="Name" @click="OpenInfo()" class="individual"></chat-bar>
      <chat-body :GroupName="Name" :user="user" :updatedmsg="chat"></chat-body>
    </div>
    <chat-footer @sentmessage="chatmessage"></chat-footer>
  </div>
  <div v-if="InfoNeeded" class="infoclass">
    <group-info :people="Members" :GroupName="Name"></group-info>
  </div>
</template>

<script>
import ChatBar from "../UI/ChatBar.vue";
import ChatBody from "./ChatBody.vue";
import ChatFooter from "./ChatFooter.vue";
import GroupInfo from "./GroupInfo.vue";
export default {
  props: ["Members", "Name", "user"],
  components: {
    ChatBar,
    ChatBody,
    ChatFooter,
    GroupInfo,
  },
  data() {
    return {
      InfoNeeded: false,
      chat: {},
    };
  },
  methods: {
    OpenInfo() {
      this.InfoNeeded = !this.InfoNeeded;
    },
    chatmessage(value) {
      let msgobj = {
        Name: this.user,
        Message: value,
        Time: 11,
      };
      this.chat = msgobj;
    },
  },
};
</script>

<style scoped>
.staticchat {
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  height: 99%;
}
.individualchat {
  flex: 2 1 auto;
}

.individual {
  background-color: aquamarine;
}

.infoclass {
  background-color: #e7e3e3;
  flex: 1 1 auto;
}

.ChatBody {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
