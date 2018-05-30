  <style>
    .num-com span{
      cursor:pointer;
      display: inline-block;
      width: 20px;
      height:20px;
      text-align: center;
      line-height:20px;
      border-radius: 50%;
      margin-right:5px;
      margin-left:5px;
      background:greenyellow;

    }
  </style>
  <template>
    <div class="num-com">
      {{row}}
      <span @click="sub">-</span>{{ carList[row.id].num || 0 }}<span @click="add">+</span>

    </div>
  </template>
  <script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    data () {
      return {

      }
    },
    computed:{
      ...mapState(['carList']),
      /**
       * 监听 carList 变化，更新当前购物车信息 shopCart，同时返回一个新对象
       */
      shopCart () {
        return Object.assign({},this.cartList[this.row.id]);
      },
      // shopCart 变化的时候重新计算当前商品的数量
      foodNum () {

      }

    },
    props:['row'],
    methods:{
      ...mapMutations(['shopAdd','shopSub']),
       add () {
         let obj=this.row;
         console.log(this.carList[this.row.id]);
         console.log(obj.id);
         this.shopAdd(obj.id,obj.name,obj.price);
       },
       sub () {
         let obj=this.row;
         this.shopSub(obj.id,obj.name,obj.price);
       }
    },
    mounted () {

    }
  }
  </script>
