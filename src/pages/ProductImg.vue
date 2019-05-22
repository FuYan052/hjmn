<template>
  <!-- 产品大图 -->
  <div class="productImg">
    <banner :bannerImg="bannerImg"></banner>
    <header-nav></header-nav>
    <div class="imgContent">
      <div class="currTitle">
        <p>彩绘系列</p>
      </div>
      <div class="currImg">
        <div class="bigImgBox">
          <img class="image" v-for="(image,i) in images" :key="i" :src="image" @click="index = i" alt="">
        </div>  
        <!-- <img class="image" v-for="(image, i) in images" :key="i" :src="image" @click="index = i"> -->
        <!-- <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow> -->
        <div class="smallImgBox">
           <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
        </div>
       
      </div>
    </div>
    <!-- 网页底部 -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import Banner from '../components/Banner'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
import  VueGallerySlideshow from 'vue-gallery-slideshow'
export default {
  name: 'ProductImg',
  components: {
    Banner,
    HeaderNav,
    Footer,
    VueGallerySlideshow
  },
  data() {
    return {
      bannerImg:[],
      images: [
        require("../assets/big1.png"),
        require("../assets/big2.png"),
        require("../assets/big3.png"),
        require("../assets/big4.png"),
      ],
    //   images: [
    //   '../assets/big1.png',
    //   'https://placekitten.com/802/800',
    //   'https://placekitten.com/803/800',
    //   'https://placekitten.com/804/800',
    //   // 'https://placekitten.com/805/800',
    //   // 'https://placekitten.com/806/800',
    //   // 'https://placekitten.com/807/800',
    //   // 'https://placekitten.com/808/800',
    //   // 'https://placekitten.com/809/800',
    //   // 'https://placekitten.com/810/800'
    // ],
    index: 0
    }
  },
  created() {
    // this.images = [
    //   {
    //     url: "../assets/big1.png"
    //   },
    //   {
    //     url: "../assets/small1.png"
    //   },
    //   {
    //     url: "../assets/small1.png"
    //   },
    // ]
  }
}
</script>

<style lang="scss" scoped>
.productImg{
  width: 100%;
  height: auto;
  .imgContent{
    width: 70.57%;
    height: auto;
    margin: 0 auto;
    .currTitle{
      width: 100%;
      height: 192px;
      box-sizing: border-box;
      padding-left: 11.79%;
      p{
        width: 195px;
        font-size:48px;
        color:rgba(46,46,46,1);
        line-height: 192px;
        border-bottom: 1px solid #C19B76;
      }
    }
    .currImg{
      width: 100%;
      height: 800px;
      border: 1px solid red;
      margin: 0 auto;
      margin-top: 80px;
      position: relative;
      overflow: hidden;
    }
  }
}

</style>
<style>
.currImg{
  width: 100%;
  height: 800px;
  border: 1px solid red;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;
  overflow: hidden !important;
}
.currImg .bigImgBox{
  width: 76%;
  height: 550px;
  margin: 0 auto;
  border: 1px solid blue;
  overflow: hidden;
  position: relative;
}
.currImg .bigImgBox img{
  width: 100%;
  height: 550px;
  position: absolute;
  top: 0;
  left: 0;
}
/* .currImg .smallImgBox{
  width: 100%;
  height: 200px;
} */
.currImg .vgs{
  z-index: 998;
  width: 100%;
  height: 550px;
  position: absolute;
  order: 1px solid green;
  top: 0;
  left: 0;
  background: #fff;
  display: table;
  display: block !important;
}
.vgs .vgs__close{
  display: none !important;
}
.vgs .vgs__prev{
  font-size: 60px;
  top: 33% !important;
  color: #e7e7e7;
}
.vgs .vgs__next{
  font-size: 60px;
  top: 33% !important;
  color: #e7e7e7;
}
.vgs__container{
  width: 100% !important;
  height: 550px !important;
  background: #fff !important;
  padding: 0 !important;
  margin: 0 !important;
  max-width: none !important;
  left: 0 !important;
  right: 0 !important;
}
.vgs__container img{
  width: 75.22% !important;
  height: 551px !important;
  margin-left: 12.38% !important;
  object-fit: none !important;
}
</style>



