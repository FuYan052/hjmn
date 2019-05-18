<template>
  <div class="home">
    <banner></banner>
    <header-nav></header-nav>
    <!-- 品牌探索 -->
    
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: {
    Banner,
    HeaderNav,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.home{
  height: 2000px;
}
</style>

