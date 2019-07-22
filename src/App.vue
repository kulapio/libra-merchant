<template>
  <div id="app">
    <div class="left">
      <Sidebar/>
    </div>
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-height: 100vh;
}
.left {
  float: left;
  width: 226px;
}
.right {
  float: left;
  width: calc(100vw - 226px);
  height: 100vh;
  padding: 1.5rem;
  overflow: auto;
  background-image: url("/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
