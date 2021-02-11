<template lang="html">

  <section class="projet">
    <h1>Mes projets</h1>

     <ul class='projets'>
        <li v-for="(projet, i) in projets" :key="i"> <a :href="projet.link" target="_blank"> {{ projet.name }}</a> </li>
    </ul>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'projet',
    data() {
      return {
          projets: [
              {name:"Visitez le Portugal",link:"https://martins81-web.github.io/AEC_Front_End/Integration1/Projet%20final/"},
              {name:"Chuck Norris Jokes",link:"https://martins81-web.github.io/AEC_Front_End/Programmation2React/chuck-norris/build/"},
              {name:"Spotify Québécois",link:"https://martins81-web.github.io/AEC_Front_End/Programmation2React/spotify-quebecois/build/"},
              {name:"Bottin des clients",link:"https://martins81-web.github.io/AEC_Front_End/Programmation2React/bottin-clients/build/"},
              {name:"Clinique vétérinaire",link:"https://cliniqueveterinairemartins.me/"},
          ]
      }
  },

    props: [],
    mounted () {

    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >
  .projet {

  }
  .projets{
    text-align: justify;
  }
</style>
