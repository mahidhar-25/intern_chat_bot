<template>
  <div class="MainBody">
    <all-groups :AllGroups="Groups" @group="OpenChat"></all-groups>
    <individual-chat
      v-if="OpenIndividual"
      :Members="GroupMembers"
      :Name="GroupName"
      :user="name"
    ></individual-chat>
  </div>
</template>

<script>
import AllGroups from "./AllGroups.vue";
import IndividualChat from "./IndividualChat.vue";

export default {
  props: ["Groups", "name"],
  components: {
    AllGroups,
    IndividualChat,
  },
  data() {
    return {
      OpenIndividual: false,
      GroupMembers: [],
      GroupName: "",
    };
  },
  methods: {
    OpenChat(value) {
      if (this.OpenIndividual === true && this.GroupName === value) {
        this.OpenIndividual = false;
      } else if (this.OpenIndividual === true && this.GroupName !== value) {
        console.log(value);
        this.OpenIndividual = true;
        this.GroupMembers = this.Groups[value];
        this.GroupName = value;
      } else {
        this.OpenIndividual = true;
        this.GroupMembers = this.Groups[value];
        this.GroupName = value;
      }
    },
  },
};
</script>

<style scoped>
.MainBody {
  display: flex;
  flex-direction: row;
  height: 90vh;
}
</style>
