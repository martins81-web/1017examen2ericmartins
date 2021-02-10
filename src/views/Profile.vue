<template lang="html">

  <section class="profile">
          <h1>Mon Profil</h1>               

    <div class="post-container"> 
    <div class="post-thumb"><img src="../assets/eric.jpg" height="300px"/></div>
    <div class="post-content">
      <div class="presentation">
        <p>Bonjour, je m'appelle Eric Martins, j'ai 39 ans, si vous vous trouvez sur ma page ce n'est sûrement pas par hasard.</p>
        <p>Je suis un Développeur Front-End junior en formation au Cégep Trois Rivières, mais ça n'a pas été toujours le cas, j'ai travaillé longtemps comme rédacteur web, je n'était pas prédestiné à faire cela.</p>
        <p>J'ai donc décidé de me reconvertir au milieu de l'informatique et réorienter ma carrière vers le développement web, cela m'amène maintenant à l'étape de recherche d'opportunités en développement de sites et d'applications web. Je suis fortement intéressé par le développement en langage JavaScript et ses frameworks.</p>   </div>
      </div>
    </div>

    <div class="post-container ">
      <h2>Mes formations</h2>
        <div class="formations">
          <ul>
            <li>Attestation d’études collégiales en Développement WEB
            Cégep Trois-Rivières, Trois-Rivières</li>
          
            <li>Attestation d’études collégiales en réseaux de télécommunication Internet
            Cégep de Saint-Laurent, Montréal</li>
          
            <li>Génie électronique et ordinateurs – automatisation
            Université de Porto, Portugal<br>
            *Évaluation comparative délivrée par le MICC :
            Diplôme d’études collégiales en formation générale
            Études universitaires de premier cycle — une année complétée — secteur des sciences pures et appliquées</li>

          </ul>
        </div>
    </div>

    <div class="post-container ">
      <h2>Mes compétences</h2>
        <div class="formations">
          <ul>
            <li v-for="competence in competences" :key="competence">{{competence}}</li>
          </ul>
        </div>
    </div>
  </section>
    

</template>

<script lang="js">

  export default  {
    name: 'profile',
    props: [],
    mounted () {

    },
    data () {
      return {
          competences:[ "HTML5", "CSS3/SASS", "BootStrap", "javaScript", "jQuery", "typeScript", "React-js", "Angular", "Vue"]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >
  .profile {
  }


  .post-container {
    margin: 20px;  
    border: 5px solid #333;
    overflow: auto
  }
.post-thumb {
    float: left
}
.post-thumb img {
    display: block
}
.post-content {
    font-size: 24px;
}

.formations{
  text-align: justify;
  font-size: 16px;
  margin: 20px
}

.presentation{
   margin: 20px
}

</style>
