import httpInstance from "@/utils/http"

export const getCheckoutInfoAPI = () => {
  return httpInstance.get('/member/order/pre')
}

export const createOrderAPI = (data) => {
  return httpInstance.post('/member/order', data)
}