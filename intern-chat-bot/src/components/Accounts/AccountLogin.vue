<template>
  <div>
    <section v-if="Login" class="LoginBody">
      <input type="text" v-model="LoginEmail" placeholder="email" />
      <input type="password" v-model="LoginPassword" placeholder="password" />
      <base-button ButtonName="Login" @click="LoginAccount"></base-button>
      <div class="LoginFoot">
        <p @click="CreateAccount()">SignUp</p>
        <p>Forgot Password</p>
      </div>
    </section>
    <account-signup v-if="Create" @GoToLogin="ShowLogin"></account-signup>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
import AccountSignup from "./AccountSignup.vue";

export default {
  props: ["InternsData"],
  emits: ["UserData", "IsLogin"],
  components: {
    BaseButton,
    AccountSignup,
  },
  data() {
    return {
      LoginEmail: "",
      LoginPassword: "",
      Login: true,
      Create: false,
    };
  },
  methods: {
    LoginAccount() {
      this.InternsData.forEach((element) => {
        if (
          element.Email === this.LoginEmail &&
          element.Password === this.LoginPassword
        ) {
          this.$emit("UserData", element);
          this.$emit("IsLogin", true);
        }
      });
    },
    CreateAccount() {
      this.Login = false;
      this.Create = true;
    },
    ShowLogin(value) {
      this.Login = value;
      this.Create = !value;
    },
  },
};
</script>

<style scoped>
.LoginBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  padding: 20px;
  width: auto;
  height: auto;
  margin: 25vh 35vw;
}
.LoginFoot {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
}

.CreateFoot {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 10px;
}
input {
  background-color: #d9d9d9;
  width: 60%;
  padding: 12px;
  margin: 7px;
  border: 1px solid #d9d9d9;
}
</style>
