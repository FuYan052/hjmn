<template>
  <div class="newsDetail">
    <banner></banner>
    <header-nav></header-nav>
    <p class="title">
      上海时装周的背后：设计师品牌怎么直视盈利化
    </p>
    <div class="author">
      <span>作者：clothing</span>        
      <span>发布时间：2019-5-17</span>
      <span>252次浏览</span>
    </div>
    <div class="detail">
      如今，购物中心到了靠内容提升竞争力的时代，除了提供产品和服务，也包括提供什么样的文化内涵给消费者。对购物中心来说，品牌是“内容”。为此，联商网特别策划“重来，购物中心‘新内容运动’”，去挖掘寻找新锐、特色品牌的较新发展和案例，供行业参考。
    </div>
    <div class="link">
      <p class="last">
        上一篇：<span>上海时装周的背后：设计师品牌怎么直视盈利化</span>
      </p>
      <p class="next">
        上一篇：<span>上海时装周的背后：设计师品牌怎么直视盈利化</span>
      </p>
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
  name: 'NewsDetail',
  components: {
    Banner,
    HeaderNav,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.newsDetail{
  width: 100%;
  height: auto;
  .title{
    font-size:36px;
    color:rgba(49,49,49,1);
    text-align: center;
    line-height: 36px;
    margin-top: 90px;
  }
  .author{
    width: 550px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    span{
      font-size:20px;
      color:rgba(161,161,161,1);
    }
  }
  .detail{
    width: 64.58%;
    height: auto;
    margin: 0 auto;
    margin-top: 68px;
    font-size:20px;
    color:rgba(161,161,161,1);
    text-indent: 2em;
    padding-bottom: 85px;
  }
  .link{
    width: 65.5%;
    height: 150px;
    margin: 0 auto;
    p{
      font-size:20px;
      color:rgba(161,161,161,1);
      margin-bottom: 17px;
      cursor: pointer;
      span{
        color: #C5A382;
      }
    }
  }
}
</style>


