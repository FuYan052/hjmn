<template>
  <div class="productDetail">
    <banner></banner>
    <header-nav></header-nav>
    <!-- 切换按钮 -->
    <div class="changeBtn">
      <div class="btnItem">
        <span>/</span>
        <div class="btnRight">
          彩绘系列
        </div>
      </div>
      <div class="btnItem">
        <span>/</span>
        <div class="btnRight">
          棕色系列
        </div>
      </div>
      <div class="btnItem">
        <span>/</span>
        <div class="btnRight">
          乳胶系列
        </div>
      </div>
    </div>
    <!-- 产品列表 -->
    <div class="listBox">
      <div class="listItem" v-for="(item,index) in picList" :key="index">
        <div class="small">
          <img :src="item.smallImg" alt="">
          <p>￥<span>13,800</span></p>
        </div>
        <div class="big">
          <img :src="item.bigImg" alt="">
          <p>￥<span>13,800</span></p>
        </div>
      </div>
    </div>
    <!-- 底部大图 -->
    <div class="bottomImg">
      <img src="../assets/bottomImg.png" alt="">
    </div>
    <!-- 网页底部 -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import Banner from '../components/Banner'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
export default {
  name: 'ProductDetail',
  components: {
    Banner,
    HeaderNav,
    Footer
  },
  data() {
    return{
      picList: []
    }
  },
  created() {
    this.picList = [
      {
        smallImg: require('../assets/sm.png'),
        bigImg: require('../assets/lg.png')
      },
      {
        smallImg: require('../assets/sm.png'),
        bigImg: require('../assets/lg.png')
      },
      {
        smallImg: require('../assets/sm.png'),
        bigImg: require('../assets/lg.png')
      },
      {
        smallImg: require('../assets/sm.png'),
        bigImg: require('../assets/lg.png')
      },
      {
        smallImg: require('../assets/sm.png'),
        bigImg: require('../assets/lg.png')
      },
      {
        smallImg: require('../assets/sm.png'),
        bigImg: require('../assets/lg.png')
      },
      {
        smallImg: require('../assets/sm.png'),
        bigImg: require('../assets/lg.png')
      },
      {
        smallImg: require('../assets/sm.png'),
        bigImg: require('../assets/lg.png')
      },
      {
        smallImg: require('../assets/sm.png'),
        bigImg: require('../assets/lg.png')
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
.productDetail{
  width: 100%;
  height: 0;
  .changeBtn{
    width: 36.97%;
    height: 60px;
    margin: 90px auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    .btnItem{
      width: 254px;
      height: 60px;
      display: flex;
      justify-content: space-around;
      span{
        display: block;
        line-height: 60px;
        font-size:24px;
        color:rgba(153,153,153,1);
      }
      .btnRight{
        font-size:24px;
        color:rgba(153,153,153,1);
        line-height:60px;
        text-align: center;
        cursor: pointer;
      }
      .btnRight:hover{
        padding: 0 30px;
        border-top: 2px solid #c19b76;
        border-bottom: 2px solid #c19b76;
        color: #c19b76;
      }
    }
    .btnItem:nth-child(1) span{
      display: none;
    }
  }
  .listBox{
    width: 71.87%;
    height: auto;
    margin: 0 auto;
    .listItem{
      width: 100%;
      .small{
        width: 31%;
        height: 100%;
        background: pink;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        p{
          font-size: 20px;
          position: absolute;
          z-index: 999;
          color: #fff;
          left: 35px;
          bottom: 20px;
          span{
            font-size: 26px;
          }
        }
      }
      .big{
        width: 67.97%;
        height: 100%;
        background: #dedede;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        p{
          font-size: 20px;
          position: absolute;
          z-index: 999;
          color: #fff;
          left: 35px;
          bottom: 20px;
          span{
            font-size: 26px;
          }
        }
      }
    }
    }
    .listItem:nth-child(odd){
      height: 580px;
      margin-bottom: 20px;
      .small{
        float: right;
      }
      .big{
        float: left;
      }
    }
    .listItem:nth-child(even){
      height: 460px;
      margin-bottom: 15px;
      .small{
        float: left;
      }
      .big{
        float: right;
      }
    }
    .bottomImg{
      width: 71.87%;
      height: 580px;
      margin: 0 auto;
      margin-bottom: 90px;
      img{
        width: 100%;
        height: 100%;
      }
    }
}
</style>

