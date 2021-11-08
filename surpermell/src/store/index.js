import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCounter(state,payload){
            payload.count++
        },
       addToCart(state,payload){
            // 默认为选中
            payload.checked=true
            state.cartList.push(payload)
       }
    },
    actions:{
        addCart(context,payload)
        {
            // 查找添加的商品是否有重复
            return new Promise((resolve,reject)=>{
                let oldProduct=null;
            for(let item of context.state.cartList){
                if(item.iid===payload.iid){
                    oldProduct=item
                }
            }
            // 有重复旧商品，重复count+1
            if(oldProduct){
                context.commit('addCounter',oldProduct)
                resolve('当前是商品数量+1')
            }
            // 没有重复商品，新加数据payload的count为1
            else{
                payload.count=1

                context.commit('addToCart',payload)
                resolve('添加了新的商品')

            }
            })
            
        }

    },
    getters:{
        cartLength(state)
        {
            return state.cartList.length
        }
    }
})
export default store