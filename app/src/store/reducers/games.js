import {
  GET_GAMES_SUCCESS,
  GET_GAMES_LOADING,
  GET_GAMES_FAILED,
} from '../actions/actionTypes'
import { fromGames } from '../selectors'

const initialState = fromGames.getInitialState()

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_GAMES_SUCCESS:
    return {
      ...state,
      list: action.list,
      areLoading: false,
      areFailed: false,
      listError: null,
    }
  case GET_GAMES_LOADING:
    return {
      ...state,
      areLoading: true,
      areFailed: false,
      listError: null,
    }
  case GET_GAMES_FAILED:
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

