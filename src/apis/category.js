import httpInstance from "@/utils/http"

export const getTopCategoryAPI = (id) => {
  return httpInstance({
    url: "/category",
    params: {
      id
    }
  })
}

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

export const getSubcategoryAPI = (data) => {
  return httpInstance.post('/category/goods/temporary', {
    data
  })
}