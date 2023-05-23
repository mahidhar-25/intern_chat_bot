<template>
  <div class="MainHeader">
    <p class="CompanyName">{{ company }}</p>
    <div class="RightHeader">
      <p class="AccountHolder">{{ name }}</p>
      <name-logo :text="GetFirstLetter" :radius="GetRadius"></name-logo>
    </div>
  </div>
</template>

<script>
import NameLogo from "../UI/NameLogo.vue";
export default {
  components: {
    NameLogo,
  },
  props: ["company", "name"],

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
.MainHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ab9d9d;
  padding-left: 25px;
  padding-right: 10px;
  color: black;
  align-items: center;
}
.CompanyName {
  font-weight: 400;
  font-size: 24px;
}

.AccountHolder {
  font-weight: 400;
  font-size: 20px;
  margin-right: 5px;
}

.RightHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
</style>
