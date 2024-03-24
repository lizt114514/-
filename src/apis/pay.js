import httpInstance from "@/utils/http"

export const getOrderAPI = (id) => httpInstance.get(`/member/order/${id}`)