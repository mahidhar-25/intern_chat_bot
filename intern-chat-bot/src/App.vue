<template>
  <account-login
    v-if="!loggedin"
    :InternsData="Interns"
    @IsLogin="CheckLogin"
    @UserData="UserDetails"
  ></account-login>
  <section v-if="loggedin" class="MainContent">
    <the-header :company="GetCompanyName" :name="GetPersonName"></the-header>
    <all-contacts :Groups="Groups" :name="GetPersonName"></all-contacts>
  </section>
</template>

<script>
import TheHeader from "./components/Layouts/TheHeader.vue";
import AccountLogin from "./components/Accounts/AccountLogin.vue";
import AllContacts from "./components/Contacts/AllContacts.vue";
import Interns from "./DummyData";
export default {
  components: {
    TheHeader,
    AccountLogin,
    AllContacts,
  },
  data() {
    return {
      name: "Mahidhar reddy",
      loggedin: false,
      Interns: Interns,
      LoginUser: null,
      Groups: {},
    };
  },
  computed: {
    GetCompanyName() {
      return "Quantrium";
    },

    GetPersonName() {
      return this.LoginUser.Name;
    },
  },
  methods: {
    UserDetails(value) {
      this.LoginUser = value;
    },
    CheckLogin(value) {
      this.loggedin = value;
    },
  },
  mounted() {
    this.Interns.forEach((ele) => {
      if (ele.Role in this.Groups) {
        this.Groups[ele.Role].push(ele);
      } else {
        let array = [];
        array.push(ele);
        this.Groups[ele.Role] = array;
      }
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.MainContent {
  height: 90vh;
}
</style>
