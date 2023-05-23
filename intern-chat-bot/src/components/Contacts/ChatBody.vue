<template>
  <div class="chartbody" ref="scrollContainer">
    <div v-for="chat in chats" :key="chat.Time" class="GroupChat">
      <div v-if="chat.Name !== user" class="SingleMessage">
        <name-logo
          :text="chat.Name[0]"
          :radius="GetRadius"
          class="Logo"
        ></name-logo>
        <div>
          <p>{{ chat.Message }}</p>
          <p class="MessageBy">{{ chat.Name }} at {{ chat.Time }}</p>
        </div>
      </div>
      <div v-else class="SingleMessageByMe toleft">
        <div>
          <p>{{ chat.Message }}</p>
          <p class="MessageBy">{{ chat.Name }} at {{ chat.Time }}</p>
        </div>
        <name-logo
          :text="chat.Name[0]"
          :radius="GetRadius"
          class="Logo"
        ></name-logo>
      </div>
    </div>
  </div>
</template>

<script>
import { GroupCharts } from "@/DummyData";
import NameLogo from "../UI/NameLogo.vue";

export default {
  components: {
    NameLogo,
  },
  props: ["GroupName", "user", "updatedmsg"],
  watch: {
    GroupName(NewValue, OldValue) {
      if (NewValue !== OldValue) {
        this.chats = [];
        this.chats = GroupCharts[NewValue];
      }
    },
    updatedmsg(NewValue) {
      this.chats.push(NewValue);
    },
    chats: {
      handler() {
        const container = this.$refs.scrollContainer;
        container.scrollTo(0, container.scrollHeight);
      },
      deep: true,
    },
  },
  data() {
    return {
      chats: [],
    };
  },
  computed: {
    GetFirstLetter() {
      return this.GroupName[0];
    },
    GetRadius() {
      return "24px";
    },
  },
  methods: {
    scrollToBottom() {
      const container = this.$refs.scrollContainer;
      container.scrollTop = container.scrollHeight;
    },
  },
  mounted() {
    this.chats = GroupCharts[this.GroupName];
    this.scrollToBottom();
  },
};
</script>

<style scoped>
.toleft {
  float: right;
}
.Logo {
  margin: 5px;
}
.GroupChat {
  display: flex;
  flex-direction: column;
  margin: 1px;
}

.SingleMessage {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  line-height: 1px;
}

.SingleMessageByMe {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 5px;
  line-height: 1px;
  margin-right: 15px;
}
.MessageBox {
  display: flex;
  flex-direction: column;
  margin: 7px;
  background-color: cornsilk;
}
.MessageBy {
  display: flex;
  flex-direction: row-reverse;
  font-size: x-small;
  opacity: 0.6;
}

.chartbody {
  max-height: 65vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chartbody::-webkit-scrollbar {
  display: none;
}
</style>
