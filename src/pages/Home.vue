<template>
  <div class="home">
    <banner :bannerImg="bannerImg"></banner>
    <header-nav></header-nav>
    <div class="historyBtn" @click="tobrandStory">
      品牌故事
    </div>
    <!-- 品牌探索 -->
    <div class="brandExploratory"> 
      <p>品牌探索</p>
      <p>BRAND</p>
      <div class="textWrap">
        {{story.title_explore}}
        <!-- 皇室牧牛皮革厂品牌，座落在悠闲的鸟语花香的崇州市观胜镇。<br />农民企业家经过资产多次重组，从做事先做好人的品质出发，一步一个脚印赢得商家与消费者的好评。不求成功与庞大，只求进取与创新，<br />... -->
      </div>
      <div class="toDetail" @click="tobrandStory">
        了解详情
      </div>   
    </div>
    <!-- 产品系列 -->
    <div class="productSeries">
      <div class="seriesItem" 
          v-for="(item,index) in seriesList"
          :key="index">
        <div class="itemText">
          <div class="seriesName">{{item.title}}</div>
          <div class="proDesc">
            {{item.introduce}}
          </div>
          <div class="price">
            ￥{{item.price}}
          </div>
          <div class="toDetailBtn">
            了解详情
          </div>
        </div>
        <div class="itemImg">
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
    <div class="more" @click="toseries">
      查看更多
    </div>
    <!-- 制作流程 -->
    <process></process>
    <!-- 工艺图片 -->
    <div class="technologyBox">
       <div class="technology">
        <p>工艺图片</p>
        <p>TECHNOLOGY</p>
        <div class="ImgBox">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in TechnologyImgs" :key="item.id">
              <img :src="item.image" alt="">
            </el-carousel-item>
          </el-carousel>
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
import Process from '../components/Process'
import { Carousel } from 'element-ui'
export default {
  name: 'Home',
  components: {
    Banner,
    HeaderNav,
    Footer,
    Process
  },
  data() {
    return{
      bannerImg:[],
      seriesList: [
        // {
        //   name: '彩绘系列',
        //   describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
        //   price: '13,800',
        //   url: require('../assets/1.png')
        // },
        // {
        //   name: '彩绘系列',
        //   describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
        //   price: '13,800',
        //   url: require('../assets/1.png')
        // },
        // {
        //   name: '彩绘系列',
        //   describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
        //   price: '13,800',
        //   url: require('../assets/1.png')
        // },
        // {
        //   name: '彩绘系列',
        //   describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
        //   price: '13,800',
        //   url: require('../assets/1.png')
        // },
        // {
        //   name: '彩绘系列',
        //   describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
        //   price: '13,800',
        //   url: require('../assets/1.png')
        // },
        // {
        //   name: '彩绘系列',
        //   describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
        //   price: '13,800',
        //   url: require('../assets/1.png')
        // },
        // {
        //   name: '彩绘系列',
        //   describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
        //   price: '13,800',
        //   url: require('../assets/1.png')
        // },
      ],
      TechnologyImgs: [],
      story: ''
    }
  },
  created() {
    //获取banner图
    this.$http.getNavs().then(resp => {
      // console.log(resp)
      if(resp.data.code === 200){
        const resultList = resp.data.data
        const result = resultList.filter(item => item.title == '首页')
        this.bannerImg.push(result[0].image)
      }
    })
    //获取品牌故事与探索
    this.$http.OnlineFranchise(1).then(resp => {
      console.log(resp)
      if(resp.data.code === 200){
       this.story = resp.data.data
      }
    })
    //获取推荐产品
    this.$http.getRecommendCase().then(resp => {
      // console.log(resp)
      if(resp.data.code === 200){
        this.seriesList = resp.data.data
      }
    })
    //获取工艺图片
    this.$http.getTechnology().then(resp => {
      // console.log(resp)
      if(resp.data.code === 200){
        this.TechnologyImgs = resp.data.data
      }
    })
  },
  methods: {
    tobrandStory() {
      this.$router.push({
        path: '/aboutUs'
      })
    },
    toseries() {
      this.$router.push({
        path: '/productDetail'
      })
    }
  }
  
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: auto;
  background: #f5f5f5;
  .historyBtn{
    width: 220px;
    height: 68px;
    background: rgba(178,133,100,1);
    font-size:30px;
    font-family:SourceHanSerifCN-ExtraLight;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height: 68px;
    z-index: 12;
    position: relative;
    margin: 0 auto;
    margin-top: -240px;
    margin-bottom: 165px;
    cursor: pointer;
  }
  .brandExploratory{
    width: 100%;
    height: 555px;
    background: #fff;
    overflow: hidden;
    p:nth-child(1){
      font-size:36px;
      color:rgba(48,48,48,1);
      text-align: center;
      line-height: 36px;
      margin-top: 85px;
      font-family:SourceHanSerifCN-ExtraLight;
    }
    p:nth-child(2){
      font-size:24px;
      color:rgba(193,155,118,1);
      text-align: center;
      line-height: 24px;
      margin-top: 15px;
      font-family:SourceHanSerifCN-ExtraLight;
    }
    .textWrap{
      width: 863px;
      height: 190px;
      margin: 0 auto;
      text-align: center;
      font-size:24px;
      color:rgba(153,153,153,1);
      line-height:36px;
      margin-top: 60px;
    }
    .toDetail{
      width:166px;
      height:56px;
      margin: 0 auto;
      text-align: center;
      background:rgba(193,155,118,1);
      font-size:24px;
      color:rgba(255,255,255,1);
      line-height:56px;
      cursor: pointer;
    }
  }
  .productSeries{
    width: 71.87%;
    height: auto;
    background: #fff;
    margin: 0 auto;
    margin-top: 90px;
    .seriesItem{
      width: 100%;
      height: 689px;
      .itemText{
        width: 50%;
        height: 689px;
        background: white;
        .seriesName{
          width: 145px;
          height: 90px;
          font-size:36px;
          line-height: 90px;
          text-align: center;
          margin: 0 auto;
          margin-top: 168px;
          color:rgba(48,48,48,1);
          background: url("../assets/border-bottom.png") no-repeat center bottom
        }
        .proDesc{
          width: 300px;
          height: 100px;
          margin: 0 auto;
          margin-top: 56px;
          font-size:18px;
          text-align: center;
          color:rgba(153,153,153,1);
          line-height:30px;
        }
        .price{
          font-size:24px;
          font-family:SourceHanSerifCN-Regular;
          color:rgba(153,153,153,1);
          line-height:36px;
          text-align: center;
        }
        .toDetailBtn{
          width: 168px;
          height: 55px;
          margin: 0 auto;
          border-top: 2px solid rgba(193,155,118,1);
          border-bottom: 2px solid rgba(193,155,118,1);
          font-size:24px;
          font-family:SourceHanSerifCN-ExtraLight;
          color:rgba(193,155,118,1);
          line-height:55px;
          text-align: center;
          margin-top: 55px;
          cursor: pointer;
        }
        .toDetailBtn:hover{
          background:rgba(193,155,118,1);
          color:rgba(255,255,255,1);
          transition: all 0.3s linear;
        }
      }
      .itemImg{
        width: 50%;
        height: 689px;
        background: paleturquoise;
        img{
          width: 100%;
          height: 689px;
        }
      }
    }
  }
  .seriesItem:nth-child(odd){
    .itemText{
      float: left;
    }
    .itemImg{
      float: right;
    }
  }
  .seriesItem:nth-child(even){
    .itemText{
      float: right;
    }
    .itemImg{
      float: left;
    }
  }
  .more{
    width:166px;
    height:56px;
    margin: 0 auto;
    margin-top: 85px;
    margin-bottom: 89px;
    text-align: center;
    background:rgba(193,155,118,1);
    font-size:24px;
    color:rgba(255,255,255,1);
    line-height:56px;
    cursor: pointer;
  }
  .technologyBox{
    width: 100%;
    height: auto;
    background: #fff;
    .technology{
      width: 81.77%;
      height: 600px;
      margin: 0 auto;
      overflow: hidden;
      p:nth-child(1){
        font-size:36px;
        color:rgba(48,48,48,1);
        text-align: center;
        line-height: 36px;
      }
      p:nth-child(2){
        font-size:24px;
        color:rgba(193,155,118,1);
        text-align: center;
        line-height: 24px;
        margin-top: 15px;
      }
      .ImgBox{
        width: 100%;
        height: 420px;
        margin-top: 70px;
        
      }
    }
  }
}
</style>
<style>
.el-carousel{
    height: 420px !important;
  }
  .el-carousel__container{
    width: 97%;
    height: 380px !important;
    overflow: hidden;
    margin-left: 9%;
  }
  .el-carousel__container .is-in-stage:nth-of-type(3){
    margin-right: 100px;
  }
  .el-carousel__arrow{
    display: none !important;
  }
  .el-carousel--horizontal{
    overflow-x: visible;
  }
  .el-carousel__item{
    width: 450px;
    height: 330px;
  }
  .el-carousel__item img{
    width: 450px;
    height: 330px;
    margin: 0 auto;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
  }
</style>


