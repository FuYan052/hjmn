<template>
  <div class="banner">
    <div class="bannerBox">
      <img src="../assets/banner.png" alt="">
    </div>
    <div class="textWrap">
        <img src="../assets/bannerText.png" alt="">
    </div>
    <div class="historyBtn">
      品牌故事
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
  .historyBtn{
    width: 220px;
    height: 68px;
    background: rgba(178,133,100,1);
    font-size:30px;
    font-family:SourceHanSerifCN-ExtraLight;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height: 68px;
    z-index: 12;
    position: relative;
    margin: 0 auto;
    margin-top: 155px;
    cursor: pointer;
  }
}
</style>
