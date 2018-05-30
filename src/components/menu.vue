<style>
  .menus{
    border:1px solid #dddddd;
    box-sizing: border-box;
  }
  .menus h3{
    padding:5px 10px
  }
  .menus p{
    padding:5px 20px;
  }
  .menus ul ul p{
    padding:5px 30px;
  }
  .menus ul ul ul li{
    padding:5px 40px;
  }
  .menus .border{
    border-bottom:1px solid #dddddd;
  }
  .bg-blue{
    background:dodgerblue;
  }
  .bg-blue:hover{
    background: #6571ff;
  }
  .bg-green{
    background:green;
  }
  .bg-green:hover{
    background: #5a8058;
  }
  .bg-yellow{
    background:yellow;
  }
  .bg-yellow:hover{
    background: #ffb66c;
  }
  .active1{
    background: #5a8058;
  }
  .active2{
    background: #6571ff;
  }
</style>
<template>
<div class="menus">
    <h3 class="border">菜单列表</h3>
    <ul>
      <li v-for="value,index in data">
        <p class="border bg-green"  :class="{'active1':value.isFolder}" @click="isFolderFun(index,data)">{{value.text}}</p>
        <ul v-show="value.isFolder">
          <li v-for="sbmenu,sbindex in value.children">
            <p class="border bg-blue" :class="{'active2':sbmenu.isFolder}" @click="isFolderFun(sbindex,value.children)">{{sbmenu.text}}</p>
            <ul v-show="sbmenu.isFolder">
              <li v-for="list,lastInedx in sbmenu.children" class="border bg-yellow" :class="{'active3':value.isFolder&&sbmenu.isFolder}" @click="levelThr(list.text)">
                {{list.text}}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
</div>
</template>
<script>
import meunData from '../data/menu.json'
import $ from 'jquery'
export default {
  data () {
     return {
       data:meunData,

     }
  },
  methods:{
    isFolderFun (code,data) {
          $.each(data,function(index,value){
            if(index===code){
              value.isFolder = !value.isFolder
            }else{
              value.isFolder = false
            }
          })
    },
    levelThr (msg) {
      this.$emit('menuMsg', msg)
    },
    eachLevelOne (code) {

    }
  },
  mounted () {

  }
}
</script>
