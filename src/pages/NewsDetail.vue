<template>
  <div class="newsDetail">
    <banner :bannerImg="bannerImg"></banner>
    <header-nav></header-nav>
    <p class="title">
      {{currNews.title}}
    </p>
    <div class="author">
      <span>作者：{{currNews.writer}}</span>        
      <span>发布时间：{{currNews.release_time}}</span>
      <span>{{currNews.views}}次浏览</span>
    </div>
    <div class="detail" v-html="currNews.content">
    </div>
    <div class="link">
      <p class="last">
        上一篇：<span @click="lastNews">上海时装周的背后：设计师品牌怎么直视盈利化</span>
      </p>
      <p class="next">
        下一篇：<span @click="nextNews">上海时装周的背后：设计师品牌怎么直视盈利化</span>
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
  },
  data() {
    return{
      bannerImg:[],
      currNews: '',
      currId: '',
      lastNewsItem: {},
      nextNewsItem: {},
    }
  },
  created() {

    this.currId = sessionStorage.currNewsId

     //获取banner图
    this.$http.getNavs().then(resp => {
      // console.log(resp)
      if(resp.data.code === 200){
        const resultList = resp.data.data
        const result = resultList.filter(item => item.title == '新闻资讯')
        this.bannerImg.push(result[0].image)
      }
    })

    //获取当前新闻
    this.$http.newsItem(this.currId).then(resp => {
      if(resp.data.code === 200){
      this.currNews = resp.data.data
      }
    })
  },
  methods: {
    //新闻上下页
    lastNews() {
      this.$http.newsLastNext(this.currId).then(resp => {
        console.log(resp)
        if(resp.data.code === 200){
          this.lastNewsItem = resp.data.data.LasePage
          this.currId = this.lastNewsItem.id
          sessionStorage.setItem('currNewsId',JSON.stringify(this.currId))
          this.currNews = this.lastNewsItem
        }
      })
    },
    nextNews() {
      this.$http.newsLastNext(this.currId).then(resp => {
        if(resp.data.code === 200){
          this.nextNewsItem = resp.data.data.NextPage
          // console.log(this.nextNewsItem)
          this.currId = this.nextNewsItem.id
          // console.log(this.currId)
          sessionStorage.setItem('currNewsId',JSON.stringify(this.currId ))
          this.currNews = this.nextNewsItem
        }
        // console.log(this.nextNewsItem)
      })
    }
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


