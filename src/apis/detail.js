import request from '@/utils/http'

export const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request.get('/goods/hot', {
    params: {
      id,
      type,
      limit
    }
  })
}