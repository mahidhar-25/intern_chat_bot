<template>
  <div class="Logo" :style="{ width: radius, height: radius }">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["text", "radius"],
};
</script>

<style scoped>
.Logo {
  background-color: #de8181;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
