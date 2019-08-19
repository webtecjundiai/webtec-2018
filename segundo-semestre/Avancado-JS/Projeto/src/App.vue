<template>
  <div id="app" class="space-between">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Play', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.space-between {
  padding-top: 15%;
}

.page {
  position: fixed;
  width: inherit;
}
</style>
