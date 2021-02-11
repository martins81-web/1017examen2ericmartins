<template lang="html">

  <section class="header">
    <ul>
      <div v-for="item in menu" :key="item.id+item.name">   
          <router-link v-if="item.name==='about'" style="float:right" class="link" :to="{path:item.name}"  tag="li">{{item.name | translateTo(language)}}</router-link>
          <router-link v-else class="link" :to="{path:item.name}" tag="li">{{item.name | translateTo(language)}}</router-link>
      </div>   
    </ul>
  </section>

</template>

<script lang="js">
import   {mixinTranslations}  from "../mixins/mixinTranslations";

export default {
    mixins: [mixinTranslations],
    name: 'headerComponent',
    props: [],
    mounted () {

    },
    data () {
      return {
        menu: [
              {id:1, name: 'home'},
              {id:2, name: 'projects'},
              {id:3, name: 'contact'},
              {id:4, name: 'about'}
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
