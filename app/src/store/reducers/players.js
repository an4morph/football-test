import {
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_LOADING,
  GET_PLAYERS_FAILED,
} from '../actionTypes'
import { fromPlayers } from '../selectors'

const initialState = fromPlayers.getInitialState()

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_PLAYERS_SUCCESS:
    return {
      ...state,
      list: action.list,
      areLoading: false,
      areFailed: false,
      listError: null,
    }
  case GET_PLAYERS_LOADING:
    return {
      ...state,
      areLoading: true,
      areFailed: false,
      listError: null,
    }
  case GET_PLAYERS_FAILED:
    return {
      ...state,
      areFailed: true,
      areLoading: false,
      listError: action.listError,
    }
  default: return state
  }
}

export default gameReducer

