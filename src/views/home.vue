<style>
  .home .right{
    position: relative;
  }
  .home .list ul{
    padding:10px;
    border:1px solid #b6b6b6;
    border-radius: 4px;
  }
  .home .list ul li{
    border-bottom:1px solid #b6b6b6;
    padding:5px;
  }
  .home .list ul li input{
    margin-right:10px;
    padding:3px;
    border-radius: 4px;
  }
  #pp{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
  }
</style>
<template>
  <div class="home control">
    <router-link :to='{path:"/element"}'>回到主页</router-link>

    <button @click="changeState">改变 state 状态</button>
    <button @click="plus">加</button>
    <button @click="sub">减</button>
    <button @click="addAction">addAction</button>
    <button @click="reduceAction">reduceAction</button>
    <h3>{{count}}</h3>
    <h3>{{add}}</h3>
    <h3>{{$store.state.count}}</h3>
    <h3>{{comNum}}</h3>
    <!--<h3>{{gettersNum}}</h3>-->
    <p>{{ message }}</p>
    <!--<p>{{ gettersNum }}</p>-->


    <div class="left">

    <menuList @menuMsg="getMenuText"/>

    </div>
    <div class="right">
      <div>
        开始日期：
        <el-date-picker v-model="start" type="date" placeholder="选择日期"></el-date-picker>
        结束日期：
        <el-date-picker v-model="end" type="date" placeholder="选择日期"></el-date-picker>

      </div>
      <div><button @click="popUp">弹窗</button></div>

      <div>{{msg}}</div>

      <input id="dd" type="text">

      <div><router-link :to='{path:"/Shop"}'>go shop</router-link></div>

      <div id="pp" style="background:#efefef;border:1px solid #ccc;"></div>

      <div class="list">
        <ul>
          <li>全选<input type="checkbox" @change="allSelect" v-model="allSelects"></li>
          <li v-for="value in list">
            <input type="checkbox" v-model="value.checked" @change="select"><input type="text" v-model="value.value.name"><input type="text" v-model="value.value.age">
          </li>
          <button @click="post">提交</button>
        </ul>
      </div>
    </div>
    <popUp ref="childFun"/>
  </div>
</template>
<script>
  import menuList from '../components/menu'
  import list from '../data/list.json'
  import popUp from '../components/pop-up'
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    data () {
      return {
        msg:'',
        list:list,
        start:0,
        end:0,
        allSelects:false,
        message : "xuxiao is boy"
      }
    },
    components:{
      menuList,
      popUp
    },
    computed:{
      ...mapState(['count','add']),  // 用多个计算属性时用 ...map---
      ...mapGetters(['count']),
      comNum () {
        return this.$store.state.count
      },
//      gettersNum () {
//        // return this.$store.getters.counts
//        return this.count()
//
//      }
    },

    methods:{
      ...mapMutations(['increment','plus','sub']),
      ...mapActions(['addAction','reduceAction']),
      changeState () {
        this.$store.commit('increment')
        // or
        // this.increment()  // mapMutations() 下的方法可以直接使用

      },
      getMenuText (msg) {
        this.msg=msg;
      },
      popUp () {
        this.$refs.childFun.showPop()
      },
      allSelect () {
        this.list.map(v=>{
          if(this.allSelects){
            v.checked=true
          }else{
            v.checked=false
          }
        })
      },
      post () {
        console.log(this.list.filter(item=>item.checked).map(item=>item.value))

      },
      select () {
        if(this.allSelects){
          let sel=this.list.every(item=>item.checked)
          if(!sel){
            this.allSelects=false
          }
        }

      }
    },
    beforeCreate () {
//      console.group('beforeCreate 创建前状态===============》');
//      console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
//      console.log("%c%s", "color:red","data   : " + this.$data); //undefined
//      console.log("%c%s", "color:red","message: " + this.message)
    },
    created () {
//      console.group('created 创建完毕状态===============》');
//      console.log("%c%s", "color:red","el     : " + this.$el); //undefined
//      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
//      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount () {
//      console.group('beforeMount 挂载前状态===============》');
//      console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
//      console.log(this.$el);
//      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
//      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    mounted () {
//      console.group('mounted 挂载结束状态===============》');
//      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
//      console.log(this.$el);
//      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
//      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
      $('#dd').datebox({
        required:true
      });
      $('#pp').pagination({
        total:2000,
        pageSize:10
      });
    },
    beforeUpdate () {
//      console.group('beforeUpdate 更新前状态===============》');
//      console.log("%c%s", "color:red","el     : " + this.$el);
//      console.log(this.$el);
//      console.log("%c%s", "color:red","data   : " + this.$data);
//      console.log("%c%s", "color:red","message: " + this.message);
    },
    updated () {
//      console.group('updated 更新完成状态===============》');
//      console.log("%c%s", "color:red","el     : " + this.$el);
//      console.log(this.$el);
//      console.log("%c%s", "color:red","data   : " + this.$data);
//      console.log("%c%s", "color:red","message: " + this.message);
    },
    beforeDestroy () {
//      console.group('beforeDestroy 销毁前状态===============》');
//      console.log("%c%s", "color:red","el     : " + this.$el);
//      console.log(this.$el);
//      console.log("%c%s", "color:red","data   : " + this.$data);
//      console.log("%c%s", "color:red","message: " + this.message);
    },
    destroyed () {
//      console.group('destroyed 销毁完成状态===============》');
//      console.log("%c%s", "color:red","el     : " + this.$el);
//      console.log(this.$el);
//      console.log("%c%s", "color:red","data   : " + this.$data);
//      console.log("%c%s", "color:red","message: " + this.message)
    }


  }
</script>
