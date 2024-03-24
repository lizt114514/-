import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user.js'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const cartStore = useCartStore()
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result

    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartStore.updateNewList()
  }

  const loginOut = () => {
    userInfo.value = {}
    cartStore.clearList()
  }
  return {
    userInfo,
    getUserInfo,
    loginOut
  }
}, {
  persist: true
})