import httpInstance from '@/utils/http'

// 获取banner
export const getBannerAPI = (params = {}) => {
  const { distributionSite = '1' } = params
  return httpInstance.get('/home/banner', {
    params: {
      distributionSite
    }
  })
}

export const findNewAPI = () => {
  return httpInstance.get('/home/new')
}

export const findHotAPI = () => {
  return httpInstance.get('/home/hot')
}

export const getGoodsAPI = () => {
  return httpInstance.get('/home/goods')
}