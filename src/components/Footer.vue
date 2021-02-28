<template lang="html">
  <section class="footer">
  
  <!-- Appel de la directive  -->
    <div  v-mydirective> - {{nom}}  - 
      <a href="https://raw.githubusercontent.com/martins81-web/1017examen2ericmartins/master/LICENSE" >LICENSE</a>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'footerComponent',
    props: [],
    data () {
      return {
        nom: "Eric Martins",
      }
    },
    //directive bas de page
    directives: {
      mydirective: {
       bind: function(el) {
         el.innerHTML = 'Copyright © ' + new Date().getFullYear()  + el.innerHTML  ;
         el.style.color = 'white';
      },
    },
    
    methods: {

    },
    computed: {

    }
}
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
