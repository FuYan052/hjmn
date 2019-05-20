<template>
  <div class="onlineFranchise">
    <banner></banner>
    <header-nav></header-nav>
    <!-- 在线加盟 -->
    <div class="franchise"> 
      <p>在线加盟</p>
      <p>JOIN&nbsp;&nbsp;IN</p>
    </div>
    <div class="franchiseContent">
      <div class="contenItem">
        <p>关于经营者素质</p>
        <span>认同公司经营和服务理念，有强烈的品牌意识</span>
        <span>有较高的经营管理及市场运作能力</span>
        <span>主动配合公司安排的互动培训和规范管理</span>
        <span>拥有较好的商业信誉度</span>
      </div>
      <div class="contenItem">
        <p>关于区域限制</p>
        <span>塔山品牌加盟商只能在合同允许的范围内销售塔山的产品，不允许跨区域销售。</span>
      </div>
      <div class="contenItem">
        <p>关于加盟费</p>
        <span>塔山品牌不收取任何加盟费，但需要缴纳1万元的品牌保证金。我们不允许任何人以任何方式损害塔山品牌的美誉度，无违反合同约定的情况，我们将无息返还。</span>
      </div>
      <div class="contenItem">
        <p>关于流程</p>
        <span>请致电023-25063.56202-333/877，招商经理将为您解答更多的加盟细节。</span>
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
  name: 'OnlineFranchise',
  components: {
    Banner,
    HeaderNav,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.onlineFranchise{
  width: 100%;
  height: auto;
  .franchise{
    width: 100%;
    height: 160px;
    background: #fff;
    overflow: hidden;
    margin-bottom: 85px;
    p:nth-child(1){
      font-size:36px;
      color:rgba(48,48,48,1);
      text-align: center;
      line-height: 36px;
      margin-top: 85px;
    }
    p:nth-child(2){
      font-size:24px;
      color:rgba(193,155,118,1);
      text-align: center;
      line-height: 24px;
      margin-top: 15px;
    }
  }
  .franchiseContent{
    width: 66.66%;
    height: auto;
    margin: 0 auto;
    padding-bottom: 80px;
    p{
      font-size: 18px;
      color: #999;
      margin-bottom: 20px;
      font-weight: bold;
    }
    span{
      line-height: 23px;
      display: block;
      font-size: 18px;
      color: #999;
      margin-bottom: 20px;
      padding-left: 20px;
      background: url("../assets/star.png") no-repeat left center;
    }
  }
}

</style>


