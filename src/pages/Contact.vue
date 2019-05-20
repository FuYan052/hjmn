<template>
  <!-- 联系我们 -->
  <div class="contact">
    <banner></banner>
    <header-nav></header-nav>
    <!-- 联系我们 -->
    <div class="contactUs"> 
      <p>联系我们</p>
      <p>CONTACT&nbsp;&nbsp;US</p>
    </div>
    <!-- 联系方式 -->
    <div class="contactType">
      <p>18228957188（陈先生)</p>
      <p>崇州市观胜镇双桥村八组</p>
    </div>
    <div class="mapWrap">
      <div class="leftMap">
        <baidu-map 
        class="bm-view" 
        ak="uRhBKfzW36pGW8KGkyAhpwXDYwmjNcZP"
        :center="center"
        :zoom="zoom" 
        @ready="handler"
        >
        </baidu-map>
      </div>
      <div class="rightForm">

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
// import BaiduMap from 'vue-baidu-map'
import { BaiduMap } from 'vue-baidu-map'

export default {
  name: 'Contact',
  components: {
    Banner,
    HeaderNav,
    BaiduMap,
    Footer
  },
  data() {
    return{
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
   methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 103.67937
      this.center.lat = 30.767555
      this.zoom = 15
    }
  }
}
</script>

<style lang="scss" scoped>
.contact{
  width: 100%;
  height: auto;
  .contactUs{
    width: 100%;
    height: 167px;
    background: #fff;
    overflow: hidden;
    margin-bottom: 90px;
    p:nth-child(1){
      font-size:36px;
      color:rgba(48,48,48,1);
      text-align: center;
      line-height: 36px;
      margin-top: 90px;
    }
    p:nth-child(2){
      font-size:24px;
      color:rgba(193,155,118,1);
      text-align: center;
      line-height: 26px;
      margin-top: 15px;
    }
  }
  .contactType{
    width: 57.29%;
    height: 42px;
    margin: 0 auto;
    border: 1px solid red;
    margin-bottom: 55px;
    p{
      font-size:24px;
      color:rgba(59,59,59,1);
      line-height:42px;
      padding-left: 60px;
    }
    p:nth-child(1){
      float: left;
      background: url("../assets/c-phone.png") no-repeat left center;
    }
    p:nth-child(2){
      float: right;
      background: url("../assets/c-address.png") no-repeat left center;
    }
  }
  .mapWrap{
    width: 63.54%;
    height: 505px;
    margin: 0 auto;
    border: 1px solid red;
    .leftMap{
      width: 47.54%;
      height: 433px;
      float: left;
      margin-top: 32px;
      border: 1px solid blueviolet;
      .bm-view {
        width: 100%;
        // height: 300px;
        height: 100%;
      }
    }
    .rightForm{
      width: 42.37%;
      height: 100%;
      float: right;
      border: 1px solid blueviolet;
    }
  }
}
</style>


