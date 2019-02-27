<template>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
    </swipe>
</template>
<script>
  import { Swipe, SwipeItem } from 'vue-swipe';
  import 'vue-swipe/dist/vue-swipe.css';
    export default {
        components:{
                swipe: Swipe,
        'swipe-item': SwipeItem
        } 
    }
</script>
<style>
body{
  font-size:12px
}
.my-swipe {
  height: 12rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.slide1 {
  background-size:100%  12rem;
  color: #fff;
  background-image:url("../assets/img/banner/ba1.jpg")
}
.slide2 {
  background-size:100%  12rem;
  color: #000;
  background-image:url("../assets/img/banner/ba2.jpg")
}
.slide3 {
  background-size:100%  12rem;
  color: #fff;
  background-image:url("../assets/img/banner/ba3.jpg")
}
.slide4 {
  background-size:100%  12rem;
  color: #fff;
  background-image:url("../assets/img/banner/ba4.jpg")
}

</style>

