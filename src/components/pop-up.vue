<style>
.pop{
  display: none;
}
.pop-up{
  position:absolute;
  left:50%;
  top:50%;
  z-index:30;
  transform: translate(-50%,-50%);
  width:360px;
  height:160px;
  border:1px solid #dddddd;
  background:#ffffff;
}
  .pop-mark{
    position: absolute;
    left:0;
    top:0;
    width:100vw;
    height:100vh;
    z-index:20;
    background:rgba(115,115,255,0.6);
  }
</style>
<template>
  <div v-if="show">
    <div class="pop-up">
      <h3>弹框</h3>
      <button @click="closed">关闭</button>
    </div>
    <div class="pop-mark"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show:false
    }
  },
  methods:{
    closed () {
      this.show=false;
    },
    showPop () {
      this.show=true;
    }
  }
}
</script>
