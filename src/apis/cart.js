import httpInstance from "../utils/http"

export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url:'/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

export const delCartAPI = (ids) => {
  return httpInstance.delete('/member/cart', {
    data: {
      ids
    }
  })
}

export const getNewCartList = () => {
  return httpInstance.get('/member/cart')
}

export const mergeCartAPI = (data) => {
  return httpInstance.post('/member/cart/merge', data)
}