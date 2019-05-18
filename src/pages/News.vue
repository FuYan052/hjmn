<template>
  <div class="news">
    <banner></banner>
    <header-nav></header-nav>
    <h1>新闻资讯</h1>

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
  }
}
</script>

<style >

</style>

