<template>
  <div class="adoutUs">
    <banner></banner>
    <header-nav></header-nav>
    <h1>关于我们</h1>

    <!-- 网页底部 -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import Banner from '../components/Banner'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
export default {
  name: 'AboutUs',
  components: {
    Banner,
    HeaderNav,
    Footer
  }
}
</script>

<style >

</style>

