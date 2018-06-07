import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import gameReducer from './reducers/games'
import playerReducer from './reducers/players'

const rootReducer = combineReducers({
  game: gameReducer,
  player: playerReducer,
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store
