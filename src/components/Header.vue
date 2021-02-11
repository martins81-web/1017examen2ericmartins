<template lang="html">

  <section class="header">
    <ul>
      <div v-for="item in menu" :key="item.id+item.name">
        <li v-if="item.name==='About'" style="float:right">        
          <router-link class="link" :to="{path:item.name}"  tag="li">{{item.name}}</router-link>
        </li>  
        <li v-else>        
          <router-link class="link" :to="{path:item.name}" tag="li">{{item.name}}</router-link>
        </li>  
      </div>   
    </ul>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'headerComponent',
    props: [],
    mounted () {

    },
    data () {
      return {
        menu: [
              {id:1, name: 'Accueil'},
              {id:2, name: 'Projets'},
              {id:3, name: 'Contact'},
               {id:4, name: 'About'}
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
  padding: 14px 16px;
  text-decoration: none;
}


 li:hover,
 li.router-link-active,
 li.router-link-exact-active {
   background-color: #4CAF50;
   cursor: pointer;
 }
</style>
