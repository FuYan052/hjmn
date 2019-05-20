<template>
<!-- 关于我们 -->
  <div class="adoutUs">
    <banner></banner>
    <header-nav></header-nav>
    <!-- 品牌故事 -->
    <div class="brandStory"> 
      <p>品牌故事</p>
      <p>BRAND</p>
    </div>
    <!-- 图片 -->
    <div class="imgBox">
      <img src="../assets/usZhanwei.png" alt="">
    </div>
    <!-- 文字 -->
    <div class="textWrap">
      <p>皇室牧牛皮革厂品牌，座落在悠闲的鸟语花香的崇州市观胜镇。农民企业家经过资产多次重组，从做事先做好人的品质出发，一步一个脚印赢得商家与消费者的好评。不求成功与庞大，只求进取与创新，所以我们崇州市胜利制革厂人，以团结、支持、奋发的信念捆绑在了一起，迈向灿烂辉煌的明天!</p>
      <p>这里四季凉爽，优越的自然条件，构建了一个理想的牛皮席生产场地。我厂专业从事水牛皮收购、皮革系列产品的生产和销售，是综合服务性企业。主要产品有头层水牛皮凉席、婴儿席、枕套、汽车坐垫、沙发坐垫、抱枕、鼠标垫等全套水牛皮系列产品，品种齐全，花样繁多，应有尽有。</p>
      <p>经过数十年的打拼，我厂已初具规模，厂房占地面积60余亩，拥有员工300余人(其中有从事管理和技术工作的30余人，固定资产八千余万元，精干的管理机构、高素质的科研团队和熟练的技术工人队伍完美组合。基建完善、生产流水线配套、升级版环保系统，一应俱。辉煌永远属于过去，挑战充满未来。不走固步自封，僵化的老路也不走盲目扩张，难利是图的狭隘之路。消费者的信赖决定着工厂的命运。一切围绕消费者旋转，以人为本，紧握时代的脉牌，与时俱进，开拓创新，是我厂一贯奉行的办厂宗旨，我厂既保留了传统的代销商实体店销售模式，也正在如火如茶的开展电子商务网销，主营旗下自有品牌皇室牧牛商标的皮席系列产品。我们的产品在高科技信息网的引导下，飞速奔向祖国的各大城市和偏受老幼同欢，雅俗共 远乡村，走进千家万户。赏尽享天伦之乐。最后，我厂一贯坚持诚信为本，质量第一的经营原则，精细独到的焦后服务，对本厂售出的产品终生保修。</p>
    </div>
    <!-- 制作流程 -->
    <process></process>
    <!-- 网页底部 -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import Banner from '../components/Banner'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
import Process from '../components/Process'
export default {
  name: 'AboutUs',
  components: {
    Banner,
    HeaderNav,
    Footer,
    Process
  },
}
</script>

<style lang="scss" scoped>
.adoutUs{
  height: auto;
  .brandStory{
    width: 100%;
    height: 160px;
    background: #fff;
    overflow: hidden;
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
  .imgBox{
    width: 75.93%;
    height: 520px;
    margin: 0 auto;
    margin-top: 82px;
    margin-bottom: 80px;
    img{
      width: 100%;
      height: 520px;
    }
  }
  .textWrap{
    width: 73.95%;
    height: auto;
    margin: 0 auto;
    font-size:20px;
    color:rgba(153,153,153,1);
    line-height:36px;
    text-indent: 2em;
    p{
      margin-bottom: 35px;
    }
  }
}
</style>


