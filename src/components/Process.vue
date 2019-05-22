<template>
  <div class="processBox">
    <div class="process">
      <p>制作流程</p>
      <p>PROCESS</p>
      <div class="itemWrap">
        <ul>
          <li v-for="(item,index) in processList" :key="index">
            <div class="itemTitle">
              <span>{{item.sort}}</span>
              <span>{{item.title}}</span>
            </div>
            <div class="itemDetail">
              <p>{{item.introduce}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Process',
  data() {
    return{
      processList: []
    }
  },
  created() {
    //获取制作流程
    this.$http.getProcess().then(resp => {
      if(resp.data.code === 200){
        this.processList = resp.data.data
      }
    }) 
    
    // this.processList = [
    //   {
    //     number: '1',
    //     title: '腌制',
    //     detail: '在原皮上撒上特制盐进行腌制'
    //   },
    //   {
    //     number: '2',
    //     title: '表面处理',
    //     detail: '对腌制好的原皮进行去毛、取肉等表面进行处理'
    //   },
    //   {
    //     number: '3',
    //     title: '高温膨胀',
    //     detail: '采用美国先进皮革处理技术、对表层处理好的牛皮进行高温膨胀'
    //   },
    //   {
    //     number: '4',
    //     title: '初鞣',
    //     detail: '把膨胀后的牛皮进行第一次鞣制'
    //   },
    //   {
    //     number: '5',
    //     title: '片皮',
    //     detail: '对初鞣后的牛皮边缘和凹凸不平进行修饰'
    //   },
    //   {
    //     number: '6',
    //     title: '复鞣',
    //     detail: '再次进行鞣质，使牛皮更加柔软'
    //   },
    //   {
    //     number: '7',
    //     title: '染色',
    //     detail: '复鞣后的牛皮采用进口植物鞣质工艺进行染色处理'
    //   },
    //   {
    //     number: '8',
    //     title: '钉板',
    //     detail: '将牛皮固定在专用版面上在高温中进行着色处理，使牛皮永不掉色'
    //   },
    //   {
    //     number: '9',
    //     title: '配皮',
    //     detail: '对处理好的牛皮根据颜色、版型、天然瑕疵数量分出等级后进行配对'
    //   },
    //   {
    //     number: '10',
    //     title: '裁剪',
    //     detail: '将配皮后的牛皮根据规格对多余部分进行裁剪'
    //   },
    //   {
    //     number: '11',
    //     title: '拼接',
    //     detail: '将裁切好的牛皮进行先进的拼接工艺处理'
    //   },
    //   {
    //     number: '12',
    //     title: '压光',
    //     detail: '处理好的成品牛皮席经800吨以上压机整理后光滑、平整、透气性能高'
    //   },
    //   {
    //     number: '13',
    //     title: '成品',
    //     detail: '成品防潮除湿、厚薄均匀、粒面细腻、不掉色，如珍珠般的光泽、黄玉般的亮润，手感光滑如丝，丰满而有弹性，即保持了水牛皮真皮层不受损害，又体现了天然水牛皮的自然纹理'
    //   },
    // ]
  }
}
</script>

<style lang="scss" scoped>
.processBox{
  width: 100%;
  height: auto;
  background: #fff;
  .process{
    width: 72.91%;
    height: 1122px;
    padding-top: 80px;
    margin: 0 auto;
    p:nth-child(1){
      font-size:36px;
      color:rgba(48,48,48,1);
      text-align: center;
      line-height: 36px;
    }
    p:nth-child(2){
      font-size:24px;
      color:rgba(193,155,118,1);
      text-align: center;
      line-height: 24px;
      margin-top: 15px;
    }
    .itemWrap{
      width: 100%;
      height: 968px;
      margin-top: 77px; 
      ul{
        width: 100%;
        li{
          width: 19.85%;
          height: 315px;
          box-sizing: border-box;
          float: left;
          .itemTitle{
            width: 100%;
            height: 65px;
            padding-left: 30px;
            padding-right: 40px;
            span:nth-child(1){
              font-size:50px;
              color:rgba(193,155,118,1);
              line-height: 60px;
            }
            span:nth-child(2){
              font-size:28px;
              color:rgba(48,48,48,1);
              line-height: 55px;
              padding-left: 10px;
            }
          }
          .itemDetail{
            width: 100%;
            height: 240px;
            padding-top: 15px;
            background: url("../assets/borderTop.png") no-repeat top left;
            p{
              width: 76.53%;
              margin-left: 15.5%;
              font-size:20px;
              color:rgba(153,153,153,1);
              line-height:24px;
              text-align: left;
            }
          }
        }
        li:nth-child(5){
          background: url("../assets/borderLeft.png") no-repeat right 70px;
        }
        li:nth-child(10){
          background: url("../assets/borderLeft.png") no-repeat left 70px;
        }
        li:nth-child(n+6):nth-child(-n+10){
          float: right;
        }
      }  
    }
  }
}
</style>

