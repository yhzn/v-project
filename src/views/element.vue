<style>
  .el-row {
    margin-bottom: 20px;

  }
  .el-row:last-child {
     margin-bottom: 0;
   }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<template>
  <div class="home control">
    <button @click="changeState">改变 state 状态</button>
    <h3>{{$store.state.count}}</h3>
      <h3>{{comNum}}</h3>
    <router-link :to='{path:"/Home"}'>回到主页</router-link>
    <div class="left">

      <menuList @menuMsg="getMenuText"/>

    </div>
    <div class="right">
      <div class="block">
        <span class="demonstration">默认不区分颜色</span>
        <el-rate v-model="value1"></el-rate>
      </div>
      <div class="block">
        <span class="demonstration">区分颜色</span>
        <el-rate
          v-model="value2"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
      <div>
        <el-button @click="show = !show">Click Me</el-button>

        <div style="display: flex; margin-top: 20px; height: 100px;">
          <transition name="el-fade-in-linear">
            <div v-show="show" class="transition-box">.el-fade-in-linear</div>
          </transition>
          <transition name="el-fade-in">
            <div v-show="show" class="transition-box">.el-fade-in</div>
          </transition>
        </div>
      </div>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">
          <i class="el-icon-edit"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-delete"></i>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <div>
        开始日期：
        <el-date-picker v-model="start" type="date" placeholder="选择日期"></el-date-picker>
        结束日期：
        <el-date-picker v-model="end" type="date" placeholder="选择日期"></el-date-picker>

      </div>
      <el-tree
        :props="props"
        :load="loadNode"
        lazy
        show-checkbox
        @check-change="handleCheckChange">
      </el-tree>

    </div>
    <popUp ref="childFun"/>
  </div>
</template>
<script>
  import menuList from '../components/menu'
  import list from '../data/list.json'
  import popUp from '../components/pop-up'
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        msg:'',
        list:list,
        start:'',
        end:'',
        allSelects:false,
        show: true,
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      };
    },
    components:{
      menuList,
      popUp
    },
    computed: {
      comNum () {
        return this.$store.state.count
      }
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log("aert")
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log("qwerdfth")
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
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
        console.table(this.list.filter(item=>item.checked).map(item=>item.value))

      },
      select () {
        if(this.allSelects){
          let sel=this.list.every(item=>item.checked)
          if(!sel){
            this.allSelects=false
          }
        }

      },
      changeState () {
        // 使用 store.commit 方法触发 mutations 改变 state
        this.$store.commit('increment');
        console.log(this.$store.state.count);
      }
    },
    mounted () {
      $('#dd').datebox({
        required:true
      });
      $('#pp').pagination({
        total:2000,
        pageSize:10
      });
    }


  }
</script>
