<template lang="html">
  <section class="footer">
   <!-- Appel de la directive  -->
    <div  v-mydirective></div>
    <div style="margin-left: 5px">
      <a href="https://raw.githubusercontent.com/martins81-web/1017examen2ericmartins/master/LICENSE" >
       {{'license' | translateTo(this.$store.getters.getCurrentLanguage)}}
      </a>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'footerComponent',
   props: [],
    mounted () {

    },
    data () {
      return {
        nom: "Eric Martins"
      }
    },
    methods: {

    },
    computed: {
     
    },
    //directive bas de page
    directives: {
      mydirective: {
       bind: function(el) {
         el.innerHTML = 'Copyright © ' + new Date().getFullYear() + " - Eric Martins"  ;
         el.style.color = 'white';
        },
      },
    },
  
}


</script>

<style scoped >
 
  .footer {
    background-color: #333;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    padding: 20px;
    
  }
  
  .a{
    color: white;
  }
  a:active {
    color: white;
  }
  a:visited {
      color:white;
  }
</style>
