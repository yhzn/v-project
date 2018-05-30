<style>
  .home .right{
    position: relative;
  }
  .home .home-head{
    padding:5px;
    margin-bottom:10px;
    border-bottom:1px solid #b6b6b6;
  }
  .home .home-head button{
    margin-right:10px;
  }
  .home .buy-list{
    height:80%;
  }
  .home .buy-list .left{
    width:98px;
    height:100%;
  }
  .home .buy-list .right{
    margin-left:100px;
  }
  .home .buy-list .right li{
    padding:5px;
    border-bottom:1px solid #b6b6b6;
  }
  .home .buy-list .num-com{
    margin-top:5px;
    text-align: right;
  }

</style>
<template>
  <div class="home control">
    <div class="left">
      <menuList @menuMsg="getMenuText"/>
    </div>
    <div class="right">
      <div class="home-head">
        <button @click="popUp">弹窗</button>
        <router-link :to='{path:"/Home"}'> 回到主页 </router-link>
      </div>
      <div class="buy-list">
        <div class="left">123</div>
        <div class="right">
          <ul>
            <li v-for="row,index in buyList">
               <div>{{row.name}}</div>
               <div><span>数量</span></div>
               <buyCar :row="row"/>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <popUp ref="childFun"/>
  </div>
</template>
<script>
  import menuList from '../components/menu'
  import popUp from '../components/pop-up'
  import buyCar from '../components/buy-car'
  import buyList from '../data/buylist.json'
  export default {
    data () {
      return {
        msg:'',
        buyList
      }
    },
    components:{
      menuList,
      popUp,
      buyCar
    },
    methods:{
      getMenuText (msg) {
        this.msg=msg;
      },
      popUp () {
        this.$refs.childFun.showPop()
      }
    },
    mounted () {

    }
  }
</script>
