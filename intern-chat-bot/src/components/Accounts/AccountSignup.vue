<template>
  <section v-if="!Credential && !AccountCreated" class="SignupBody">
    <input type="text" v-model="CreateEmail" placeholder="email" />
    <input type="password" v-model="CreatePassword" placeholder="password" />
    <input
      type="password"
      v-model="ReEnterPassword"
      placeholder="ReEnter password"
    />
    <base-button ButtonName="continue" @click="CheckPassword()"></base-button>
    <div class="CreateFoot">
      <p>Login</p>
    </div>
  </section>
  <section v-if="Credential" class="SignupBody">
    <input type="text" v-model="UserName" placeholder="Name" />
    <select v-model="UserRole">
      <option disabled value="">Please select one</option>
      <option>FrontEnd</option>
      <option>BackEnd</option>
      <option>MachineLearning</option>
    </select>
    <base-button ButtonName="SignUp" @click="AccountCreate()"></base-button>
  </section>
  <section v-if="AccountCreated" class="SignupBody">
    <p>Your Account has been created successfully</p>
    <base-button ButtonName="Login" @click="GoToLogin()"></base-button>
  </section>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";

export default {
  emits: ["GoToLogin"],
  components: {
    BaseButton,
  },
  data() {
    return {
      CreateEmail: "",
      CreatePassword: "",
      ReEnterPassword: "",
      UserRole: "",
      UserName: "",
      Credential: false,
      AccountCreated: false,
    };
  },
  methods: {
    CheckPassword() {
      if (
        this.CreatePassword.length > 0 &&
        this.CreatePassword === this.ReEnterPassword
      ) {
        this.Credential = true;
      }
    },
    AccountCreate() {
      this.AccountCreated = true;
      this.Credential = false;
    },
    GoToLogin() {
      this.$emit("GoToLogin", true);
    },
  },
};
</script>

<style scoped>
.SignupBody {
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
input,
select {
  background-color: #d9d9d9;
  width: 60%;
  padding: 12px;
  margin: 7px;
  border: 1px solid #d9d9d9;
}
</style>
