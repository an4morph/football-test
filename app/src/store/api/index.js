import axios from 'axios'
import { generateUrl } from './helpers'

export const getErrorMessage = (error) => {
  let errMsg = error.message
  if (error.response) errMsg = error.response.data.message
  return errMsg
}

export const TIMER = Math.random() * 1000

export const get = (dispatch, url, options) => {
  const {
    params, success, loading, failed,
  } = options
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  }

  dispatch(loading())

  return axios({
    method: 'get',
    url: generateUrl(url, params),
    headers,
  })
    .then(({ data }) => {
      setTimeout(() => dispatch(success(data)), TIMER)
    })
    .catch((error) => {
      const errMsg = getErrorMessage(error)
      dispatch(failed(errMsg))
    })
}
