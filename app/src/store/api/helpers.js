import qs from 'query-string'

export const endpoint = 'http://localhost:3000/'

export const getToken = () => localStorage.getItem('token')
export const setToken = token => localStorage.setItem('token', token)

export const generateUrl = (url, params) => {
  if (!params) return `${endpoint}${url}`
  const isEmpty = obj => Object.keys(obj).length === 0
  const stringifiedParams = isEmpty(params) ? '' : `?${qs.stringify(params)}`
  return `${endpoint}${url}${stringifiedParams}`
}

export const checkResponseType = (type, data) => {
  const errorText = `Response type incorrect. Type "${typeof data}" instead of "${type}"`
  if (!type) return data
  if (type === 'array') {
    if (Array.isArray(data)) return data
    throw new Error(errorText)
  }
  return data
}
