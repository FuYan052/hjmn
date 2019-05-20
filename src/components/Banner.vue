<template>
  <div class="banner">
    <div class="bannerBox">
      <img src="../assets/banner.png" alt="">
    </div>
    <div class="textWrap">
        <img src="../assets/bannerText.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
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
  .textWrap{
      width: 201px;
      height: 56px;
      margin: 0 auto;
      margin-top: 360px;
      position: relative;
      z-index: 10;
      img{
        width: 201px;
        height: 56px;
      }
    }
}
</style>
