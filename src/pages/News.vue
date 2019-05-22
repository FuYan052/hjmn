<template>
  <div class="news">
    <banner :bannerImg="bannerImg"></banner>
    <header-nav></header-nav>
    <!-- 切换按钮 -->
    <div class="changeBtn">
      <span>/</span>
      <div  v-for="(item,index) in newsCate" :key="index" :class="{'activeNewsCate':activeNewsCateIndex === index}" @click="changeNewsCate(item,index)">
        {{item.name}}
      </div>
    </div>
    <!-- 新闻列表 -->
    <div class="newsList">
      <div class="listItem" v-for="(item,index) in newsList" :key="index">
        <div class="leftImg">
          <img :src="item.image" alt="">
        </div>
        <div class="rightContent">
          <div class="title" @click="toDetail(item,index)">
            {{item.title}}
          </div>
          <div class="date">
            {{item.release_time}}
          </div>
          <div class="detail">
           {{item.remark}}
          </div>
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="page">
      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="total">
      </el-pagination>
    </div>
    <!-- 网页底部 -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import Banner from '../components/Banner'
import HeaderNav from '../components/HeaderNav'
import { Pagination  } from 'element-ui'
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
      bannerImg:[],
      newsCate: [],
      newsCateId: '1',
      activeNewsCateIndex: 0,
      newsList: [],
      total: null,
    }
  },
  created() {
    //获取banner图
    this.$http.getNavs().then(resp => {
      // console.log(resp)
      if(resp.data.code === 200){
        const resultList = resp.data.data
        const result = resultList.filter(item => item.title == '新闻资讯')
        this.bannerImg.push(result[0].image)
      }
    })
    //获取新闻分类
    this.$http.newsCate().then(resp => {
      //  console.log(resp)
      if(resp.data.code === 200){
        this.newsCate = resp.data.data
        this.newsCateId = 1
      }
    })
    //获取新闻列表
    this.$http.newsList(1,1).then(resp => {
       console.log(resp)
      if(resp.data.code === 200){
        this.total = resp.data.data.count
        this.newsList = resp.data.data.data
      }
    })
  },
  methods: {
    changeNewsCate(item,index) {
        this.activeNewsCateIndex = index
        const id = item.id
        this.newsCateId = id
        this.$http.newsList(id,1).then(resp => {
        console.log(resp)
        if(resp.data.code === 200){
          this.total = resp.data.data.count
          this.newsList = resp.data.data.data
        }
      })
    },
    handleCurrentChange(curr) {
      console.log(curr)
      const currId = this.newsCateId
      //获取新闻列表
      this.$http.newsList(currId,curr).then(resp => {
        console.log(resp)
        if(resp.data.code === 200){
          this.total = resp.data.data.count
          this.newsList = resp.data.data.data
        }
      })
    },
    //跳转新闻详情
    toDetail(item) {
      this.$router.push({
        path: '/newsDetail',
        name: 'NewsDetail',
        params: {
          id: item.id,
          item
        }
      })
      sessionStorage.setItem('currNewsId',JSON.stringify(item.id))
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
    // display: flex;
    // justify-content: space-between;
    div{
      width: 162px;
      height: 56px;
      font-size:24px;
      color:rgba(153,153,153,1);
      line-height:56px;
      text-align: center;
      cursor: pointer;
    }
    // div:hover{
    //   border-top: 2px solid #c19b76;
    //   border-bottom: 2px solid #c19b76;
    //   color: #c19b76;
    // }
    .activeNewsCate{
      border-top: 2px solid #c19b76;
      border-bottom: 2px solid #c19b76;
      color: #c19b76;
    }
    div:nth-of-type(1){
      float: left;
    }
    div:nth-of-type(2){
      float: right;
    }
    span{
      height: 56px;
      line-height: 56px;
      font-size:24px;
      color:rgba(153,153,153,1);
      display: inline-block;
      margin-left: 17%;
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
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
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
  .page{
    width: 260px;
    height: 30px;
    border: 1px solid red;
    margin: 85px auto;
  }
}
</style>


