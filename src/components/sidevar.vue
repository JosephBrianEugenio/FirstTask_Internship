<script>
export default {
  props: {},
  setup() {},
};
</script>

<template>
  <div class="sidebar"></div>
</template>

<style>
:root {
  --sidebar-bg-color: black;
  --sidebar-bg-color: red;
  --sidebar-bg-color: blue;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var (--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3 ease;
  display: flex;
  display: flex;
  flex-direction: column;
}
</style>
