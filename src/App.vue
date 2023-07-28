<template>

  <RouterView />

</template>

<script>
  import { RouterLink, RouterView } from "vue-router";

</script>

<style lang="scss">

body {
  width: 100%;
  height: 100%;
  max-width: 1920px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
#app {
  width: 100%;
  min-height: 100vh;
  max-width: 1920px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
</style>
