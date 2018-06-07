import { get } from '../api'
import {
  GET_GAMES_SUCCESS,
  GET_GAMES_LOADING,
  GET_GAMES_FAILED,
} from '../actionTypes'


export function getGamesSuccess(data) {
  return {
    type: GET_GAMES_SUCCESS,
    list: data,
  }
}
export function getGamesLoading() {
  return {
    type: GET_GAMES_LOADING,
  }
}
export function getGamesFailed(error) {
  return {
    type: GET_GAMES_FAILED,
    listError: error,
  }
}


export function getGames(params = {}) {
  return (dispath) => {
    get(dispath, '/playoff.json', {
      params,
      success: getGamesSuccess,
      loading: getGamesLoading,
      failed: getGamesFailed,
      responseType: 'array',
    })
  }
}
