<template>
  <div class="news">
    <banner></banner>
    <header-nav></header-nav>
    <!-- 切换按钮 -->
    <div class="changeBtn">
      <div class="btnLeft">
        新闻动态
      </div>
      <span>/</span>
      <div class="btnRight">
        行业资讯
      </div>
    </div>
    <!-- 新闻列表 -->
    <div class="newsList">
      <div class="listItem" v-for="(item,index) in newsList" :key="index">
        <div class="leftImg">
          <img src="../assets/itemLeft.png" alt="">
        </div>
        <div class="rightContent">
          <div class="title">
            {{item.title}}
          </div>
          <div class="date">
            {{item.date}}
          </div>
          <div class="detail">
           {{item.detail}}
          </div>
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
  name: 'News',
  components: {
    Banner,
    HeaderNav,
    Footer
  },
  data() {
    return{
      newsList: [
        {
          url: require("../assets/itemLeft.png"),
          title: '上海时装周的背后：设计师品牌怎么直视盈利化',
          date: '2019-5-17',
          detail: '数字化与信息化的迅速发展，给各行各业带来了新的生存环境与新的发展契机。服装产业智能专家、北京服装学院副教授、北京...'
        },
        {
          url: require("../assets/itemLeft.png"),
          title: '上海时装周的背后：设计师品牌怎么直视盈利化',
          date: '2019-5-17',
          detail: '数字化与信息化的迅速发展，给各行各业带来了新的生存环境与新的发展契机。服装产业智能专家、北京服装学院副教授、北京...'
        },
        {
          url: require("../assets/itemLeft.png"),
          title: '上海时装周的背后：设计师品牌怎么直视盈利化',
          date: '2019-5-17',
          detail: '数字化与信息化的迅速发展，给各行各业带来了新的生存环境与新的发展契机。服装产业智能专家、北京服装学院副教授、北京...'
        },
        {
          url: require("../assets/itemLeft.png"),
          title: '上海时装周的背后：设计师品牌怎么直视盈利化',
          date: '2019-5-17',
          detail: '数字化与信息化的迅速发展，给各行各业带来了新的生存环境与新的发展契机。服装产业智能专家、北京服装学院副教授、北京...'
        },
        {
          url: require("../assets/itemLeft.png"),
          title: '上海时装周的背后：设计师品牌怎么直视盈利化',
          date: '2019-5-17',
          detail: '数字化与信息化的迅速发展，给各行各业带来了新的生存环境与新的发展契机。服装产业智能专家、北京服装学院副教授、北京...'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.news{
  .changeBtn{
    width: 490px;
    height: 56px;
    margin: 90px auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    div{
      width: 162px;
      height: 56px;
      font-size:24px;
      color:rgba(153,153,153,1);
      line-height:56px;
      text-align: center;
      cursor: pointer;
    }
    div:hover{
      border-top: 2px solid #c19b76;
      border-bottom: 2px solid #c19b76;
      color: #c19b76;
    }
    .btnLeft{
      float: left;
    }
    .btnRight{
      float: right;
    }
    span{
      display: block;
      height: 56px;
      line-height: 56px;
      font-size:24px;
      color:rgba(153,153,153,1);
    }
  }
  .newsList{
    width: 1190px;
    height: auto;
    margin: 0 auto;
    .listItem{
      width: 1190px;
      height: 370px;
      border-bottom: 1px solid #ccc;
      .leftImg{
        width: 542px;
        height: 370px;
        float: left;
        img{
          width:426px;
          height:268px;
          margin-top: 50px;
        }
      }
      .rightContent{
        width: 645px;
        height: 370px;
        float: right;
        .title{
          width: 515px;
          height: 55px;
          border-bottom: 1px solid #8e8e8e;
          margin-top: 50px;
          font-size:24px;
          color:rgba(52,52,52,1);
          line-height: 55px;
          cursor: pointer;
        }
        .title:hover{
          color:rgba(193,155,118,1);
        }
        .date{
          height: 40px;
          font-size:20px;
          color:rgba(153,153,153,1);
          line-height:40px;
        }
        .detail{
          width: 642px;
          margin-top: 80px;
          font-size:20px;
          color:rgba(153,153,153,1);
          line-height:24px;
        }
      }
    }
  }
}
</style>


