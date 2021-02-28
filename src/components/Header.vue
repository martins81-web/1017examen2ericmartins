<template lang="html">

  <section class="header">
   <div id='account-info'>
 </div>
    <ul>
      <li style="float:right; width: 160px" class="connection navButtons"
      :style="showProfile? 'background-color: crimson':  'background-color: royalblue'"
      @click="toggleConnection" 
      >
          {{showProfile ? $options.filters.translateTo('logout', language) : $options.filters.translateTo('login', language)}}
          <font-awesome-icon :icon="showProfile ? 'sign-out-alt': 'sign-in-alt'" style="margin-left: 5px" />
      </li>

      <li id='language' style="float:right; border-right: 2px solid white" class="languague navButtons"
      :class="this.$store.getters.getCurrentLanguage === 'fr' ? 'languageSelected':  'languageNotSelected'"
      @click="changeLanguage('fr')"
      >
          Français
      </li>
      <li id='language'  style="float:right;border-left: 2px solid white;" class="languague navButtons"
      :class="this.$store.getters.getCurrentLanguage === 'en' ? 'languageSelected':  'languageNotSelected'"
      @click="changeLanguage('en')"
      >
          English
      </li>
    <!-- Cycle for qui parcours et affiche les options du navbar -->
      <div v-for="item in menu" :key="item.id+item.name">   
      <!-- La class link et la tag="li" permettent d'utiliser les classes 
      router-link-active et router-link-exact-active pour donner un look différent à option du menu qui est active-->
          <router-link name="{item.name}"  class="link navButtons" :to="{path:item.name}" tag="li">
            {{item.name | translateTo(language)}}
          </router-link>
      </div>   
      
     
      

     <!--  <div style="display: flex; justify-content: flex-end; margin: 11px">
        <button 
          class="button-one"
          @click="toggleConnection" 
          :style="showProfile? 'background-color: crimson': null"
          style="color:white; padding: 3px 6px;margin-right:25px"
        >
          {{showProfile ? $options.filters.translateTo('logout', language) : $options.filters.translateTo('login', language)}}
        </button>
        <toggle-button style='margin-right:25px'
          :width="120"
          :height="35"
          :font-size="15"
          :value="this.$store.getters.getCurrentLanguage === 'fr' ? true: false"
          :color='{checked: "#4CAF50", unchecked: "crimson"}'
          :sync="true"
          :labels="{checked: 'Français', unchecked: 'English'}"
          @change="changeLanguage"
          />
      </div>-->

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
      this.language=this.$store.getters.getCurrentLanguage;
      this.showProfile=this.$store.getters.getCurrentConnection;
    },
    methods: {
      toggleConnection(){
        this.$store.commit('toggleConnection');
        console.log(this.$store.getters.getCurrentConnection);
        this.showProfile=this.$store.getters.getCurrentConnection;
      },
      changeLanguage(clicked){
        if(clicked!==this.$store.getters.getCurrentLanguage){
            this.$store.dispatch('changeLanguage', clicked);
          }
        this.language = clicked;
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
  height: 70px;
  min-width: 100px;
  text-decoration: none;

}


 li:hover,
 li.router-link-active,
 li.router-link-exact-active {
   background-color: #4CAF50;
   cursor: pointer;
 }

 li.router-link-active,
 li.router-link-exact-active{
   font-weight: bold;
 }

 #language:hover{
    background-color: crimson;
 }

 .languageSelected{
    background-color: chocolate;
    font-weight: bold;
 }

button{
  color:#fff;
  text-align: center;
  padding: 20px;
}

.button-one{
  text-align: center;
  cursor: pointer;
  font-size:15px;
  font-weight:bold;
  margin: 0 0 0 100px;
}

/*Button One*/
.button-one {
  padding:20px 60px;
  outline: none;
  background-color: #4CAF50;
  border: none;
  border-radius:5px;
  box-shadow: 0 9px #95a5a6;
}

.button-one:hover{
  background-color: #2ecc71;
}

.button-one:active {
  background-color: #2ecc71;
  box-shadow: 0 5px #95a5a6;
  transform: translateY(4px);
}

.navButtons{
  display: flex; 
  justify-content: center; 
  align-items: center
}
</style>
