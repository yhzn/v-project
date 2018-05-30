<style>
  .slot{
    padding:10px;
    background:yellow;
    margin-bottom:10px;
  }
</style>
<template>
<div class="slot">
  <div>
    <slot name="fir">
      fir---null
    </slot>
  </div>
  <div>
    <slot></slot>
  </div>
  <div>
    <slot name="thr">
      thr---null
    </slot>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>
