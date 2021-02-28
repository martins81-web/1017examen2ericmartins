<!-- Component Profile qui s'affiche lors que l'utilisateur est loggué -->
<template lang="html">

  <section class="profile">
          <h1>{{ "profile" | translateTo(this.$store.getters.getCurrentLanguage)}}</h1>               

    <div class="post-container"> 
    <div class="post-thumb"><img src="../assets/eric.jpg" height="300px"/></div>
    <div class="post-content">
    <!--Présentation du profil-->
      <div class="presentation">
        <p>{{'presentation1' | translateTo(this.$store.getters.getCurrentLanguage)}}</p>
        <p>{{'presentation2' | translateTo(this.$store.getters.getCurrentLanguage)}}</p>       
        <p>{{'presentation3' | translateTo(this.$store.getters.getCurrentLanguage)}}</p>
      </div>
    </div>
    </div>
    <div class="post-container ">
    <!--Formations-->
      <h2>{{ "studies" | translateTo(this.$store.getters.getCurrentLanguage)}}</h2>
        <div class="formations">
          <ul>
            <li>{{ "formation1" | translateTo(this.$store.getters.getCurrentLanguage)}}</li>
            <li>{{ "formation2" | translateTo(this.$store.getters.getCurrentLanguage)}}</li>
            <li>{{ "formation3" | translateTo(this.$store.getters.getCurrentLanguage)}}<br>
            {{ "formation31" | translateTo(this.$store.getters.getCurrentLanguage)}}</li>

          </ul>
        </div>
    </div>
    <!--Compétences-->
    <div class="post-container ">
      <h2> {{ "skills" | translateTo(this.$store.getters.getCurrentLanguage)}}</h2>
        <div class="formations">
          <ul>
          <!-- Cycle for pour afficher les cométences -->
            <li v-for="competence in competences" :key="competence">{{competence}}</li>
          </ul>
        </div>
    </div>
  </section>
    

</template>

<script lang="js">

export default {
    name: 'profile',
    props: [],
    mounted () {

    },
    data () {
      // Array de string qui contient les compétences
      return {
          competences:[ "HTML5", "CSS3/SASS", "BootStrap", "javaScript", "jQuery", "typeScript", "React-js", "Angular", "Vue", "Flutter"]
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
