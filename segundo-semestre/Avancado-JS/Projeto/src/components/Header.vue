<template>
  <div id="header">
    <div class="box-title">
      <h1 id="title"> {{ title }} </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'SPA w/ VUEJS'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Play');

body {
  font-family: 'Play', sans-serif;
}

#header {
  justify-content: center;
  display: flex;
  width: 100%;
  color: white;
  position: fixed;
  background-color: rgb(63, 4, 99);
  box-shadow: 0px 1px 1px 0px deeppink;
}

#logo img {
  width: 50%;
}
</style>
