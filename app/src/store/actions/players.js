import { get } from '../api'
import {
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_LOADING,
  GET_PLAYERS_FAILED,
} from '../actionTypes'


export function getPlayersSuccess(data) {
  return {
    type: GET_PLAYERS_SUCCESS,
    list: data,
  }
}
export function getPlayersLoading() {
  return {
    type: GET_PLAYERS_LOADING,
  }
}
export function getPlayersFailed(error) {
  return {
    type: GET_PLAYERS_FAILED,
    listError: error,
  }
}


export function getPlayers(commandId) {
  return (dispath) => {
    get(dispath, `/players/${commandId}.json`, {
      success: getPlayersSuccess,
      loading: getPlayersLoading,
      failed: getPlayersFailed,
      responseType: 'array',
    })
  }
}
