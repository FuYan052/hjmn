<template>
  <div class="banner">
    <div class="bannerBox" v-for="(item,index) in bannerImg" :key="index">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return{
      props:['bannerImg'],
    }
  }, props:['bannerImg'],
  created() {
    // console.log(this.props)
  }
  
}
</script>

<style lang="scss" scoped>
.banner{
  width: 100%;
  height: 845px;
  position: relative;
  overflow: hidden;
  .bannerBox{
    width: 100%;
    height: 845px;
    position: absolute;
    top: 0;
    left: 0;
    img{
      width: 100%;
      height: 845px;
    }
  }
}
</style>
