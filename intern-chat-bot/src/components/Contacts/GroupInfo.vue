<template>
  <div class="groupinfo">
    <div v-if="ShowDescription" class="personaldetails">
      <name-logo :radius="GetRadius" :text="GetFirstLetter"></name-logo>
      <p>description</p>
    </div>
    <div v-if="ShowPersonDetails" class="personaldetails">
      <name-logo :radius="GetRadius" :text="GetFirstLetter"></name-logo>
      <p>Name : {{ ShowUser.Name }}</p>
      <p>Mail : {{ ShowUser.Email }}</p>
      <p>Role : {{ ShowUser.Role }}</p>
    </div>
    <div class="members" v-for="(user, index) in people" :key="index">
      <chat-bar
        :name="user.Name"
        @click="ShowPersonInfo(user, index)"
      ></chat-bar>
    </div>
  </div>
</template>

<script>
import NameLogo from "../UI/NameLogo.vue";
import ChatBar from "../UI/ChatBar.vue";
export default {
  props: ["people", "GroupName"],
  components: {
    NameLogo,
    ChatBar,
  },
  watch: {
    GroupName(NewName, OldName) {
      if (NewName !== OldName) {
        this.ShowDescription = true;
        this.ShowPersonDetails = false;
      }
    },
  },
  data() {
    return {
      ShowDescription: true,
      ShowPersonDetails: false,
      PersonName: this.GroupName,
      ShowUser: {},
    };
  },
  computed: {
    GetFirstLetter() {
      return this.PersonName[0];
    },
    GetRadius() {
      return "100px";
    },
  },
  methods: {
    ShowPersonInfo(user) {
      if (user === this.ShowUser) {
        this.ShowDescription = true;
        this.ShowPersonDetails = false;
      } else {
        this.people.forEach((element) => {
          if (element === user) {
            this.ShowUser = element;
            this.PersonName = element.Name;
          }
        });
        this.ShowDescription = false;
        this.ShowPersonDetails = true;
      }
    },
  },
};
</script>

<style>
.groupinfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.personaldetails {
  padding: 10px;
  padding-top: 25px;
  flex: 1 1 auto;
}
.members {
  flex: 2 1 auto;
  background-color: #d9d9d9;
  width: 100%;
  height: 100%;
}
</style>
