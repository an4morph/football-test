import axios from 'axios'
import { generateUrl, checkResponseType } from './helpers'

const getErrorMessage = (error) => {
  let errMsg = error.message
  if (error.response) errMsg = error.response.data.message
  return errMsg
}

export const get = (dispatch, url, options) => {
  const {
    params, success, loading, failed, responseType,
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
    .then(({ data }) => checkResponseType(responseType, data))
    .then((data) => {
      dispatch(success(data))
    })
    .catch((error) => {
      const errMsg = getErrorMessage(error)
      dispatch(failed(errMsg))
    })
}
export const post = (dispatch, url, options) => {
  //
}
