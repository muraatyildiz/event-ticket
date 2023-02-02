<template>
  <top-bar-menu/> 
  <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
    <router-view/>
  </div>
  
  <footer-menu/>
</template>
<script>
import TopBarMenu from "./components/topBar.vue"
import FooterMenu from "./components/footer.vue"
export default {
  components: {
    TopBarMenu,
    FooterMenu
  }
}</script>
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
