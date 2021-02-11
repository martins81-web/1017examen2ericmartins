<template lang="html">

  <section class="contact">
    <h1>Contact</h1>
    <form class="form">
      <div  class='item'>
        <label>Nom </label>
        <input type="text" name="lastname" placeholder="Nom" />
      </div>
      <div  class='item'>
        <label>Prénom </label>
        <input type="text" name="firstname" placeholder="Prénom" />
      </div>
      <div  class='item'>
        <label>Courriel </label>
        <input type="text" name="email" placeholder="Courriel" />
      </div>
      <div  class='item'>
        <label>Raison du contact </label>
        <select class="sel" name="categorie">
            <option v-for="(option, i) in dropdownOptions" :key="i"> {{ option }}</option>
        </select>
      </div>
    </form>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'contact',
    props: [],
    mounted () {

    },
    data () {
      return {
          dropdownOptions: [
              "Emploi",
              "Informations",
              "Projet",
              "Prise de rendez-vous",
              "Autre"
          ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .contact {

  }
  .form{
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  .item{
    margin-top: 10px;
  }
  
</style>
