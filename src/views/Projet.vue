<template lang="html">

  <section class="projet">
    <h1> {{"myProjects" | translateTo(lang)}}</h1>

     <ul class='projets' id="projets">
     <!--Cycle for pour afficher les projets-->
        <li  v-for="(projet, i) in projets" :key="i"> 
          <a :id="projet.name" :href="projet.link" target="_blank"> {{ projet.name | translateTo(lang)}}</a> 
        </li>
    </ul>
  </section>

</template>

<script lang="js">

export default {
    name: 'projet',
    data() {
      return {
        //Array d'objets qui contient le nom du projet et son respective lien
          projets: [
              {name:"visitPortugal",link:"https://martins81-web.github.io/AEC_Front_End/Integration1/Projet%20final/"},
              {name:"chuckNorrisJokes",link:"https://martins81-web.github.io/AEC_Front_End/Programmation2React/chuck-norris/build/"},
              {name:"quebecerSpotify",link:"https://martins81-web.github.io/AEC_Front_End/Programmation2React/spotify-quebecois/build/"},
              {name:"clientsContactList",link:"https://martins81-web.github.io/AEC_Front_End/Programmation2React/bottin-clients/build/"},
              {name:"veterinaryClinic",link:"https://cliniqueveterinairemartins.me/"},
          ]
      }
  },

    props: [],
    mounted () {

    },
    methods: {

    },
    computed: {
        lang () {
            return this.$store.getters.getCurrentLanguage
        }
    }
}


</script>

<style scoped >
  .projet {

  }
  .projets{
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
