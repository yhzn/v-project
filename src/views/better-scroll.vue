<style>
  .better-scroll{
    overflow: auto;
  }
  .wrapper{
    height:300px;
    border:1px solid black;
    overflow: hidden;
  }
  .wrapper .content{
    position: relative;
    overflow: hidden;
  }
  .wrapper .list{
    background:green;
    float:left;
    width:100%;
  }
</style>
<template>
<div class="better-scroll control">
  <div class="wrapper">
    <div class="content">
      <div class="list">1</div>
      <div class="list">2</div>
      <div class="list">3</div>
      <div class="list">4</div>
      <div class="list">5</div>
    </div>
  </div>
  <div>
    <slot-component>{{message}}</slot-component>
    <slot-component>
      <p slot="fir">name 为 fir 的插槽</p>
      <p>没有 name 默认的插槽</p>
      <p slot="thr">name 为 thr 的插槽</p>
    </slot-component>
  </div>
  <div>
    <div>作用域插槽</div>
    <slot-scope>
      <div>hello at parent</div>
    </slot-scope>
    <div>slot-scope 能被用于任意元素 or 组件<br/> 不局限于 &lt; template &gt;</div>
    <slot-scope>
      <template slot-scope="props">
        <div>hello at parent</div>
        <div>{{props.txt}}</div>
      </template>
    </slot-scope>
  </div>
</div>
</template>
<script>
  import slotComponent from '@/components/slot'
  import slotScope from '@/components/slot-scope'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
         message:"插槽"
      }
    },
    methods:{
       async initData () {
         new BScroll('.wrapper',{
           scrollY:false,
           scrollX:true,
            snap:{
              loop: true,
              threshold: 0.3,
              speed: 400
            }
         })
       }
    },
    components:{
      slotComponent,
      slotScope,
    },
    mounted () {
       this.initData()
    }

  }

</script>
