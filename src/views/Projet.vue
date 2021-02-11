<template lang="html">

  <section class="projet">
    <h1> {{"myProjects" | translateTo(language)}}</h1>

     <ul class='projets'>
        <li v-for="(projet, i) in projets" :key="i"> <a :href="projet.link" target="_blank"> {{ projet.name | translateTo(language)}}</a> </li>
    </ul>
  </section>

</template>

<script lang="js">
import   {mixinTranslations}  from "../mixins/mixinTranslations";

export default {
    mixins: [mixinTranslations],
    name: 'projet',
    data() {
      return {
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
