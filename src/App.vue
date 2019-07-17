<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/stats">Stats</router-link> |
      <router-link to="/merchant">Merchant</router-link> |
      <router-link to="/blog">Blog</router-link>
    </div>
    <router-link to="/">
    <img src="@/assets/img/logo/kulap-bakery-logo.jpg"
        srcset="@/assets/img/logo/kulap-bakery-logo@2x.jpg 2x,
                @/assets/img/logo/kulap-bakery-logo@3x.jpg 3x"
        class="kulap-bakery-logo">
    </router-link>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.header-image {
  height: 70px;
  cursor: pointer;
}
.kulap-bakery-logo {
  width: 279px;
  height: 157px;
  object-fit: contain;
  margin-bottom: 20px;
}
</style>
