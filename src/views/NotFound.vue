<template lang="html">

  <section class="not-found">
    <div v-if="this.$store.getters.getCurrentLanguage==='en'" style='text-align: center'>
      <img src="../assets/error-404.png" height="300px"/>
    </div>
    <div v-else style='text-align: center'>
      <img src="../assets/404_FP.jpg" height="300px"/>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'not-found',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped  >
  .not-found {

  }
</style>
