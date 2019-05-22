<template>
  <div class="navBox">
      <div class="navLeft">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="navRight">
        <ul>
          <router-link tag="li" to="/home"><span>首页</span></router-link>
          <router-link tag="li" to="/aboutUs"><span>走进皇家牧牛</span></router-link>
          <router-link tag="li" to="/product">
            <el-dropdown>
              <span class="el-dropdown-link">
                产品系列<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><router-link tag="li" to="/productDetail"><span>彩绘系列</span></router-link></el-dropdown-item>
                <el-dropdown-item><router-link tag="li" to="/productDetail"><span>棕色系列</span></router-link></el-dropdown-item>
                <el-dropdown-item><router-link tag="li" to="/productDetail"><span>乳胶系列</span></router-link></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </router-link>
          <router-link tag="li" to="/news"><span>新闻资讯</span></router-link>
          <router-link tag="li" to="/contact"><span>联系我们</span></router-link>
          <router-link tag="li" to="/onlineFranchise"><span>在线加盟</span></router-link>
        </ul>
      </div>
    </div>
</template>

<script>
import { Dropdown } from 'element-ui'
export default {
  name: 'headerName',
  components: {
    Dropdown
  },
  data() {
    return{

    }
  },
  created() {
  //   this.$http.getNavs().then(resp =>{
  //    console.log(resp)
  //  }) 
  }
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
        font-size:20px;
        line-height: 72px;
        cursor: pointer;
        .el-dropdown-link{
          height: 72px;
          font-family:SourceHanSerifCN-ExtraLight;
          color:rgba(255,255,255,1);
          font-size:20px;
          line-height: 72px;
        }
        span:hover{
          padding-bottom: 10px;
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
  
}
</style>

