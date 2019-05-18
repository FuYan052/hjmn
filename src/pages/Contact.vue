<template>
  <div class="contact">
    <banner></banner>
    <header-nav></header-nav>
    <h1>联系我们</h1>

    <!-- 网页底部 -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import Banner from '../components/Banner'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'
export default {
  name: 'Contact',
  components: {
    Banner,
    HeaderNav,
    Footer
  }
}
</script>

<style >

</style>

