
<template>
  <div id="app">
    <Header/>
    <router-view>
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {

  name: 'App',
  data () {
      return {
          loggedin: true,
          lang:'fr'
      }
    },
  components: {
    Header,
    Footer,
  },
  computed: {
  
    },
    methods: {
      languageChange (value) {
          this.lang=value; // someValue
        }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body { 
  margin: 0; 
  margin-bottom: 5%;
}

</style>