<template>
  <div class="footer">
    <div class="booterBox">
      <div class="footerLeft">
        <ul>
          <li>
            <p>走进皇家牧牛</p>
            <span>品牌故事</span>
            <span>制作流程</span>
          </li>
          <li>
            <p>产品系列</p>
            <span>彩绘系列</span>
            <span>棕色系列</span>
            <span>乳胶系列</span>
          </li>
          <li>
            <p>新闻资讯</p>
            <span>新闻动态</span>
            <span>行业资讯</span>
          </li>
          <li>
            <p>在线加盟</p>
            <span>招商加盟</span>
          </li>
        </ul>
      </div>
      <div class="footerRight">
        <p>联系方式</p>
        <span>18228957188（陈先生）</span>
        <span>崇州市观胜镇双桥村八组</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer{
  width: 100%;
  height: 430px;
  background:rgba(38,38,45,1);
  margin-top: 1000px;
  .booterBox{
    width: 1270px;
    height: 430px;
    margin: 0 auto;
    .footerLeft{
      width: 900px;
      height: 200px;
      box-sizing: border-box;
      padding-right: 100px;
      border-right: 1px solid #4b4b4b;
      margin-top: 125px;
      float: left;
      ul{
        display: flex;
        justify-content: space-between;
        li{
          p{
            font-size:24px;
            font-family:SourceHanSerifCN-ExtraLight;
            color:rgba(255,255,255,1);
            line-height:24px;
            margin-bottom: 55px;
          }
          span{
            display: block;
            font-size:20px;
            font-family:SourceHanSerifCN-ExtraLight;
            color:rgba(153,153,153,1);
            line-height:60px;
            padding-left: 18px;
            background: url("../assets/footerListStyle.png") no-repeat 0 center;
            cursor: pointer;
          }
        }
      }
    }
    .footerRight{
      width: 282px;
      height: 200px;
      margin-top: 125px;
      float: right;
      p{
        font-size:24px;
        font-family:SourceHanSerifCN-ExtraLight;
        color:rgba(255,255,255,1);
        line-height:24px;
        margin-bottom: 55px;
      }
      span{
        font-size:20px;
        font-family:SourceHanSerifCN-ExtraLight;
        color:rgba(229,229,229,1);
        line-height:60px;
        padding: 5px 0;
        padding-left: 50px;
      }
      span:nth-child(2){
        background: url("../assets/phone.png") no-repeat 0 center;
      }
      span:nth-child(3){
        background: url("../assets/address.png") no-repeat 0 center;
      }
    }
  }
}
</style>

