<template lang="html">

  <section class="contact">
    <h1 style="background-color: #4CAF50; color: white; padding: 20px; margin: 20px; width: 20%; border-left: 15px solid black">{{'contact' | translateTo(lang)}}</h1>
    <form class="form">
      <div  class='item'>
        <label> {{'lastName' | translateTo(lang)}} </label>
        <input type="text" name="lastname"  />
      </div>
      <div  class='item'>
        <label>{{'firstName' | translateTo(lang)}} </label>
        <input type="text" name="firstname"  />
      </div>
      <div  class='item'>
        <label>{{'email' | translateTo(lang)}} </label>
        <input type="text" name="email"  />
      </div>
      <div  class='item'>
        <label>{{'reasonOfContact' | translateTo(lang)}} </label>
        <select class="sel" name="categorie" id="selectContactType">
        <!-- cycle for pour l'affichage des options dans le menu select -->
            <option v-for="(option, i) in dropdownOptions" :key="i"> {{ option | translateTo(lang) }}</option>
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
        lang () {
            return this.$store.getters.getCurrentLanguage
        }
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
    margin: 20px;
    width: 23%
  }

  label{
    font-weight: bold;
    margin-right: 20px;
    flex:2
  }
  .item{
    margin-top: 10px;
    display: flex;
  }

  input, select{
    width:100%;
    flex:4
  }
  
</style>
