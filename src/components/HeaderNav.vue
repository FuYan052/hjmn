<template>
  <div class="navBox">
      <div class="navLeft">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="navRight">
        <ul>
          <router-link tag="li" to="/home"><span>首页</span></router-link>
          <router-link tag="li" to="/aboutUs"><span>走进皇家牧牛</span></router-link>
          <router-link tag="li" to="/product"><span>产品系列</span></router-link>
          <router-link tag="li" to="/news"><span>新闻资讯</span></router-link>
          <router-link tag="li" to="/contact"><span>联系我们</span></router-link>
          <router-link tag="li" to="/onlineFranchise"><span>在线加盟</span></router-link>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'headerName'
}
</script>

<style lang="scss" scoped>
.navBox{
  width: 100%;
  height: 72px;
  padding: 0 4.84%;
  box-sizing: border-box;
  position: absolute;
  top: 30px;
  .navLeft{
    width: 9.58%;
    height: 72px;
    float: left;
  }
  .navRight{
    width: 57.08%;
    height: 72px;
    float: right;
    ul{
      height: 72px;
      display: flex;
      justify-content: space-between;
      li{
        height: 72px;
        font-family:SourceHanSerifCN-ExtraLight;
        color:rgba(255,255,255,1);
        font-size:24px;
        line-height: 72px;
        cursor: pointer;
        span:hover{
          padding-bottom: 10px;
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
  
}
</style>

