<template lang="html">

  <section class="header">
   <div id='account-info'>
 </div>
    <ul>

 <!-- Cycle for qui parcours et affiche les options du navbar -->
      <div v-for="item in menu" :key="item.id+item.name">   
      <!-- La class link et la tag="li" permettent d'utiliser les classes 
      router-link-active et router-link-exact-active pour donner un look différent à option du menu qui est active-->
          <router-link name="{item.name}" v-if="item.name==='about'" style="float:right" class="link" :to="{path:item.name}"  tag="li">{{item.name | translateTo(language)}}</router-link>
          <router-link name="{item.name}" v-else class="link" :to="{path:item.name}" tag="li">{{item.name | translateTo(language)}}</router-link>
      </div>   
      
      <div style="display: flex; justify-content: flex-end; margin: 13px">
        <button 
          @click="toggleConnection" 
          :style="showProfile ? 'background-color: crimson' :'background-color: royalblue'"
          style="color:white; padding: 10px 20px;margin-right:25px"
        >
          {{showProfile ? $options.filters.translateTo('logout', language) : $options.filters.translateTo('login', language)}}
        </button>
        <toggle-button style='margin-right:25px'
          :width="120"
          :height="35"
          :font-size="15"
          :value="this.$store.getters.getCurrentLanguage === 'fr' ? true: false"
          :color='{checked: "royalblue", unchecked: "crimson"}'
          :sync="true"
          :labels="{checked: 'Français', unchecked: 'English'}"
          @change="changeLanguage"
          />
      </div>
      
    </ul>
  </section>

</template>

<script lang="js">

export default {
    name: 'headerComponent',
    props: [    ],
    
    
    data () {
      return {
        //array d'objets avec les options de menu du navBar
        menu: [
              {id:1, name: 'home'},
              {id:2, name: 'projects'},
              {id:3, name: 'contact'},
              {id:4, name: 'about'}
        ],
        showProfile: false,
        language: 'fr',
        
      }
    },
    mounted(){
      this.showProfile=this.$store.getters.getCurrentConnection;
    },
    methods: {
      toggleConnection(){
        this.$store.commit('toggleConnection');
        console.log(this.$store.getters.getCurrentConnection);
        this.showProfile=this.$store.getters.getCurrentConnection;
      },
      changeLanguage(){
        let language = this.$store.getters.getCurrentLanguage === 'fr' ? 'en' : 'fr';
        this.$store.dispatch('changeLanguage', language);
        this.language = language;
      }
  },
    computed: {

    },
     created() {
      //console.log(this.showProfile)
  }, 
  
}


</script>

<style scoped>
  .header {

  }
  li {
  border-right: 1px solid #bbb;
}

li:last-child {
  border-right: none;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li, .link{
  display: block;
  color: white;
  text-align: center;
  padding: 24px 28px;
  text-decoration: none;
}


 li:hover,
 li.router-link-active,
 li.router-link-exact-active {
   background-color: #4CAF50;
   cursor: pointer;
 }


</style>
