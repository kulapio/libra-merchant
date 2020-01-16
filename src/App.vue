<template>
  <div id="app">
    <div class="ctn-left">
      <Sidebar/>
    </div>
    <div class="ctn-right">
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
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}
.ctn-left {
  float: left;
  width: 226px;
}
.ctn-right {
  float: left;
  width: calc(100% - 226px);
  height: 100vh;
  padding: 1.5rem;
  background-image: url("/classicgame/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>
