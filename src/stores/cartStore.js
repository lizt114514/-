import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'
import { delCartAPI, insertCartAPI, getNewCartList } from '@/apis/cart'
import { useUserStore } from './userStore'

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])

  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)

  // 从后台把最新的数据拿过来
  const updateNewList = async () => {
    const res = await getNewCartList()
    cartList.value = res.result
  }

  // 清除列表
  const clearList = () => {
    cartList.value = []
  }

  // 在购物车添加商品
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      await insertCartAPI({ skuId, count })
      updateNewList()
      return
    }
    // 如果没有登录就在本地进行操作
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      item.count++
    } else {
      cartList.value.push(goods)
    }
  }

  // 删除购物车的商品
  const delCart = async (skuId) => {
    if (isLogin.value) {
      await delCartAPI([skuId])
      updateNewList()
      return
    }
    const idx = cartList.value.findIndex(item => item.skuId === skuId)
    cartList.value.splice(idx, 1)
  }

  // 当前购物车的商品总数
  const allCount = computed(() => {
    return cartList.value.reduce((sum, item) => sum + item.count, 0)
  })

  // 总价
  const allPrice = computed(() => {
    return cartList.value.reduce((sum, item) => sum + item.price * item.count, 0)
  })

  // 已选中的列表 
  const allSelectedList = computed(() => {
    return cartList.value.filter(item => item.selected)
  }) 

  // 选中商品的总个数
  const allSelectedCount = computed(() => {
    return allSelectedList.value.reduce((sum, item) => sum + item.count, 0)
  })

  // 选中商品的总价
  const allSelectedPrice = computed(() => {
    return allSelectedList.value.reduce((sum, item) => sum + item.count * item.price, 0)
  })

  // 单选
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }

  // 全选
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  // 检查是否全选
  const isAll = computed(() => cartList.value.every(item => item.selected))
  
  
  return {
    cartList,
    delCart,
    addCart,
    allCount,
    allPrice,
    allSelectedList,
    allSelectedCount,
    allSelectedPrice,
    singleCheck,
    allCheck,
    isAll,
    clearList,
    updateNewList
  }
}, {
  persist: true
})