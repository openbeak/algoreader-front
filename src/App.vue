<template>
    <div id="app">
        <MainPage />
    </div>
</template>

<script>
import MainPage from './views/MainPage'

export default {
  name: 'app',
  components: {
      MainPage
  }
}
</script>

<style>
body {
    margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
