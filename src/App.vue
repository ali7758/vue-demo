<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <carnavbar v-show="carF"></carnavbar>
    <navbar v-show="bNav"></navbar>
    <transition
      enter-active-class="animated rollIn"
    >
    <router-view/>
    </transition>
    <footbar v-show="bFoot"></footbar>

  </div>
</template>

<script>
import navbar from './components/header';
import carnavbar from './components/carnav';

import footbar from './components/footer';
import icont from './assets/css/icon.css';
import {mapGetters,mapActions} from 'vuex';
import {VIEW_NAV,VIEW_FOOT,VIEW_CARF} from './store/types.js';

export default {
  name: 'App',
  components:{
    navbar,footbar,carnavbar
  },

  mounted(){
    // console.log(this.$store.dispatch)
    this.watchRouter(this.$route.path);
  },
  
  computed:{
    ...mapGetters([
      'bNav','bFoot','carF','bLoading'
    ])
  },
  methods:{
    watchRouter(path){
      if(/list|home/.test(path)){
        this.$store.dispatch(VIEW_NAV,true);
        this.$store.dispatch(VIEW_FOOT,true);
        this.$store.dispatch(VIEW_CARF,false);
      }else if(/find|login|reg/.test(path)){
        this.$store.dispatch(VIEW_NAV,false);
        this.$store.dispatch(VIEW_FOOT,true);
        this.$store.dispatch(VIEW_CARF,true);
      }else if(/car|detail/.test(path)){
        this.$store.dispatch(VIEW_NAV,false);
        this.$store.dispatch(VIEW_FOOT,false);
        this.$store.dispatch(VIEW_CARF,true);
      }else if(/mine|error/.test(path)){
        this.$store.dispatch(VIEW_NAV,false);
        this.$store.dispatch(VIEW_FOOT,true);
        this.$store.dispatch(VIEW_CARF,false);
      }
    },
    fn(){
       console.log(this.$store.dispatch)
    }
    
  },
  watch:{
    $route(newValue){
      this.watchRouter(newValue.path);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{padding:0;margin:0;list-style:none}
a{text-decoration:none;color:#000}
</style>
