<template>
  <div class="product">
    <banner></banner>
    <header-nav></header-nav>
    <!-- 产品系列 -->
    <div class="productSeries">
      <div class="seriesItem" 
          v-for="(item,index) in seriesList"
          :key="index">
        <div class="itemText">
          <div class="seriesName">{{item.name}}</div>
          <div class="proDesc">
            {{item.describe}}
          </div>
          <div class="price">
            ￥{{item.price}}
          </div>
          <div class="toDetailBtn">
            了解详情
          </div>
        </div>
        <div class="itemImg">
          <img :src="item.url" alt="">
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
export default {
  name: 'Product',
  components: {
    Banner,
    HeaderNav,
    Footer
  },
  data() {
    return{
      seriesList: [
        {
          name: '彩绘系列',
          describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
          price: '13,800',
          url: require('../assets/1.png')
        },
        {
          name: '彩绘系列',
          describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
          price: '13,800',
          url: require('../assets/1.png')
        },
        {
          name: '彩绘系列',
          describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
          price: '13,800',
          url: require('../assets/1.png')
        },
        {
          name: '彩绘系列',
          describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
          price: '13,800',
          url: require('../assets/1.png')
        },
        {
          name: '彩绘系列',
          describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
          price: '13,800',
          url: require('../assets/1.png')
        },
        {
          name: '彩绘系列',
          describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
          price: '13,800',
          url: require('../assets/1.png')
        },
        {
          name: '彩绘系列',
          describe: '产品介绍产介绍产品介绍产绍产品介绍产品介绍产品介绍产品介绍',
          price: '13,800',
          url: require('../assets/1.png')
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.product{
  width: 100%;
  height: auto;
  background: #f5f5f5;
  .productSeries{
    width: 71.87%;
    height: auto;
    background: #fff;
    margin: 90px auto;
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
}
</style>

