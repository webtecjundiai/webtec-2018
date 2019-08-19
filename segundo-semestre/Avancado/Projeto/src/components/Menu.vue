<template>
  <div id="menu">
    <div class="flex-container">
      <div><router-link to="/"><img :src="home_img" class="menu-icon"></router-link></div>
      <div><router-link to="/info"><img :src="info_img" class="menu-icon"></router-link></div>
      <div><router-link to="/contato"><img :src="contato_img" class="menu-icon"></router-link></div>
      <div><router-link to="/menu"><img :src="menu_img" class="menu-icon"></router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      contato_img: require('@/../static/icons/contato.png'),
      home_img: require('@/../static/icons/home.png'),
      info_img: require('@/../static/icons/info.png'),
      menu_img: require('@/../static/icons/menu.png')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Play');

body {
  font-family: 'Play', sans-serif;
}
#menu {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: rgb(63, 4, 99);
  box-shadow: 0px 0px 2px 1px deeppink;
}

.flex-container > div {
  width: 100px;
  margin: 10px;
  text-align: center;
}
</style>
