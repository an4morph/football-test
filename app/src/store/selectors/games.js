const initialState = {
  list: [],
  areLoading: false,
  areFailed: false,
  listError: null,
}

export default {
  getInitialState() { return initialState },

  getList(state = initialState) {
    return state.game.list || initialState.list
  },
  areLoading(state = initialState) {
    return state.game.areLoading || initialState.areLoading
  },
  areFailed(state = initialState) {
    return state.game.areFailed || initialState.areFailed
  },
  listError(state = initialState) {
    return state.game.listError || initialState.listError
  },
}

