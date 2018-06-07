import qs from 'query-string'

export const endpoint = 'http://localhost:3000/'

export const generateUrl = (url, params) => {
  if (!params) return `${endpoint}${url}`
  const isEmpty = obj => Object.keys(obj).length === 0
  const stringifiedParams = isEmpty(params) ? '' : `?${qs.stringify(params)}`
  return `${endpoint}${url}${stringifiedParams}`
}

