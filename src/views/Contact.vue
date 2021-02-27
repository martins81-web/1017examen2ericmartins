<template lang="html">

  <section class="contact">
    <h1>{{'contact' | translateTo(language)}}</h1>
    <form class="form">
      <div  class='item'>
        <label> {{'lastName' | translateTo(language)}} </label>
        <input type="text" name="lastname"  />
      </div>
      <div  class='item'>
        <label>{{'firstName' | translateTo(language)}} </label>
        <input type="text" name="firstname"  />
      </div>
      <div  class='item'>
        <label>{{'email' | translateTo(language)}} </label>
        <input type="text" name="email"  />
      </div>
      <div  class='item'>
        <label>{{'reasonOfContact' | translateTo(language)}} </label>
        <select class="sel" name="categorie" id="selectContactType">
        <!-- cycle for pour l'affichage des options dans le menu select -->
            <option v-for="(option, i) in dropdownOptions" :key="i"> {{ option | translateTo(language) }}</option>
        </select>
      </div>
    </form>
  </section>

</template>

<script lang="js">

export default {
    name: 'contact',
    props: [],
    mounted () {

    },
    data () {
      return {
        //Array avec les options de type de contact
          dropdownOptions: [
              "job",
              "informations",
              "project",
              "appointment",
              "other"
          ],
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
