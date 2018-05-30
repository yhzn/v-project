
  import Vue from 'vue';
  import Vuex from 'vuex';

  Vue.use(Vuex);

  const store={
    state:{
      count:1,
      add:2,
      carList:{}
    },
    getters:{   // getters 相当于计算属性
      count (state) {
         return state.count+=100
      }
    },
    mutations:{   // 更改 store 中的状态的唯一方法
      increment (state) {
        state.count++;
      },
      plus (state) {
        state.count++;
      },
      sub (state) {
        state.count--;
      },
      shopAdd (state,shopId,name,price) {
         let cart =state.carList;
         let shop=cart[shopId]=(cart[shopId]||{});
         if(shop.num){
           shop.num++;
         } else {
           shop={
              num:1,
              name,
              price
           }
         }


      },
      shopSub (state) {

      }
    },

    // actions 是异步的改变state状态 Mutations 是同步改变状态

    // actions 可以调用 Mutations 中的方法

    actions:{
      // 上下文对象，可以理解为store本身
      addAction(context){
        console.log(context);
        context.commit('plus');

      },
      // {commit} 直接把 commit对象传递过来，可以让方法体逻辑和代码更清晰明了
      reduceAction({commit}){
        commit('sub');
      }
    }

    // module: 状态管理器的模块组操作

  }

  export default new Vuex.Store(store)
