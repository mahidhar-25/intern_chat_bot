<template>
  <button class="MainButton">{{ ButtonName }}</button>
</template>

<script>
export default {
  props: ["ButtonName"],
};
</script>

<style>
.MainButton {
  text-align: center;
  padding: 7px;
  margin: 10px;
  width: 30%;
  background-color: #f54949;
  color: white;
  border: none;
}
</style>
