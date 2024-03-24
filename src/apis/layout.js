import httpInstance from '@/utils/http'

export const getCategoryAPI = () => {
  return httpInstance.get('/home/category/head')
}