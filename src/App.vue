<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <cabecera-tienda />
    <router-view/>
    <footer-page/>
  </div>
</template>
<script>
import CabeceraTienda from "./components/CabeceraTienda.vue";
import FooterPage from "./components/FooterPage.vue"
export default {
  components:{
    CabeceraTienda,
    FooterPage
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
