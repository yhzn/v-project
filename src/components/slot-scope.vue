<style>
  .slot-scope{
    padding:10px;
    background:blue;
    margin-bottom:10px;
  }
</style>
<template>
  <div class="slot-scope">
    <slot txt="this from child component"></slot>
    <div>作用域组件</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    methods:{

    },
    mounted () {

    }
  }
</script>
