<template>
  <div class="productDetail">
    <banner :bannerImg="bannerImg"></banner>
    <header-nav></header-nav>
    <!-- 切换按钮 -->
    <div class="changeBtn">
      <div class="btnItem" v-for="(item,index) in prodSeries" :key="index">
        <span>/</span>
        <div class="btnRight" :class="{'btnActive':btnActiveIndex === index}" @click="changeSeries(item,index)">
          {{item.name}}
        </div>
      </div>
    </div>
    <!-- 产品列表 -->
    <div class="listBox">
      <div class="listItem" v-for="(item,index) in productList" :key="index">
        <div class="small">
          <img :src="item.image" alt="">
          <p>￥<span>{{item.price}}</span></p>
        </div>
        <div class="big">
          <img :src="item.image" alt="">
          <p>￥<span>{{item.price}}</span></p>
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
      bannerImg:[],
      // picList: [],
      prodSeries: [],
      btnActiveIndex: 0,
      productList: [],
    }
  },
  created() {
     //获取banner图
    this.$http.getNavs().then(resp => {
      if(resp.data.code === 200){
        const resultList = resp.data.data
        const result = resultList.filter(item => item.title == '产品系列')
        this.bannerImg.push(result[0].image)
      }
    })
    //产品系列
     this.$http.seriesCate().then(resp => {
      console.log(resp)
      if(resp.data.code === 200){
        this.prodSeries = resp.data.data
      }
    })
    //默认第一个系列列表
    this.$http.seriesList(1).then(resp => {
      if(resp.data.code === 200){
        this.productList = resp.data.data
      }
    })

    // this.picList = [
    //   {
    //     smallImg: require('../assets/sm.png'),
    //     bigImg: require('../assets/lg.png')
    //   },
    //   {
    //     smallImg: require('../assets/sm.png'),
    //     bigImg: require('../assets/lg.png')
    //   },
    //   {
    //     smallImg: require('../assets/sm.png'),
    //     bigImg: require('../assets/lg.png')
    //   },
    //   {
    //     smallImg: require('../assets/sm.png'),
    //     bigImg: require('../assets/lg.png')
    //   },
    //   {
    //     smallImg: require('../assets/sm.png'),
    //     bigImg: require('../assets/lg.png')
    //   },
    //   {
    //     smallImg: require('../assets/sm.png'),
    //     bigImg: require('../assets/lg.png')
    //   },
    //   {
    //     smallImg: require('../assets/sm.png'),
    //     bigImg: require('../assets/lg.png')
    //   },
    //   {
    //     smallImg: require('../assets/sm.png'),
    //     bigImg: require('../assets/lg.png')
    //   },
    //   {
    //     smallImg: require('../assets/sm.png'),
    //     bigImg: require('../assets/lg.png')
    //   },
    // ]
  },
  methods: {
    changeSeries(item,index) {
      this.btnActiveIndex = index
      const id = item.id
      this.$http.seriesList(id).then(resp => {
      if(resp.data.code === 200){
        this.productList = resp.data.data
        console.log( this.productList)
      }
    })
    }
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
      .btnActive{
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
      div:nth-of-type(1){
        width: 31%;
        height: 100%;
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
      div:nth-of-type(2){
        width: 67.97%;
        height: 100%;
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

