<template lang="html">

  <section class="footer">
  <!-- Appel de la directive  -->
    <div v-mydirective> - {{nom}}  </div>
 
  </section>

</template>

<script lang="js">

  export default  {
    name: 'footerComponent',
    props: [],
    data () {
      return {
        nom: "Eric Martins"
      }
    },
    //directive bas de page
    directives: {
      mydirective: {
       bind: function(el) {
         el.innerHTML = 'Copyright © ' + new Date().getFullYear() + el.innerHTML ;
         el.style.color = 'white';
      },
    },
    mounted () {

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
    color: 'white';
    padding: 24px 28px;
    margin-top: 24px;
  }
</style>
