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
    <!-- 左侧地图 -->
    <div class="mapWrap">
      <div class="leftMap">
        <baidu-map 
        class="bm-view" 
        ak="uRhBKfzW36pGW8KGkyAhpwXDYwmjNcZP"
        :center="center"
        :zoom="zoom" 
        @ready="handler"
        :scroll-wheel-zoom="true"
        >
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <bm-marker :position="center" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
         <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        </baidu-map>
      </div>
      <!-- 右侧表单 -->
      <div class="rightForm">
        <form action="">
          <div class="formItem">
            <span>姓名：</span><input type="text" v-model="form.name">
          </div>
          <div class="formItem">
            <span>Email：</span><input type="text" v-model="form.email">
          </div>
          <div class="formItem">
            <span>电话：</span><input type="text" v-model="form.phone">
          </div>
          <div class="formItem message">
            <span>留言：</span><textarea class="textarea" v-model="form.message"></textarea>
          </div>
          <div class="formItem subBtn">
            <input type="submit" value="提交" @click="onSubmit">
          </div>
        </form>
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
import { BaiduMap, BmMarker,BmGeolocation, BmNavigation } from 'vue-baidu-map'
export default {
  name: 'Contact',
  components: {
    Banner,
    HeaderNav,
    BaiduMap,
    BmMarker,
    BmGeolocation,
    BmNavigation,
    Footer
  },
  data() {
    return{
      center: {lng: 0, lat: 0},
      zoom: 3,
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      }
    }
  },
   methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 103.67937
      this.center.lat = 30.767555
      this.zoom = 15
    },
    //表单提交
    onSubmit() {
        console.log(this.form);
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
    margin-bottom: 50px;
    .leftMap{
      width: 47.54%;
      height: 433px;
      float: left;
      margin-top: 32px;
      .bm-view {
        width: 100%;
        height: 100%;
      }
    }
    .rightForm{
      width: 42.37%;
      height: 100%;
      float: right;
      .formItem{
        height: 70px;
        border-bottom: 2px solid #999999;
        span{
          font-size:22px;
          color:rgba(48,48,48,1);
          line-height: 90px;
        }
        input{
          width: 80.2%;
          height: 30px;
          float: right;
          margin-top: 15px;
          font-size: 20px;
          border: none;
          outline: none;
          margin-top: 30px;
          color: #c19b76;
        }
      }
      .message{
        height: 145px;
        border: 2px solid #999999;
        margin-top: 35px;
        span{
          font-size:22px;
          color:rgba(48,48,48,1);
          line-height: 50px;
        }
        .textarea{
          width: 84%;
          text-align: left;
          height: 115px;
          float: right;
          font-size: 20px;
          margin-top: 15px;
          border: none;
          outline: none;
          color: #c19b76;
        }
      }
      .subBtn{
        height: 50px;
        margin-top: 10px;
        border: none;
        input{
          width: 100%;
          height: 48px;
          float: left;
          font-size: 20px;
          border: none;
          outline: none;
          color: #fff;
          background: #c19b76;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
<style>
.bm-view  .anchorBL{
  display: none ;
}
</style>


