const initialState = {
  list: [],
  areLoading: false,
  areFailed: false,
  listError: null,
}

export default {
  getInitialState() { return initialState },

  getList(state = initialState) {
    return state.player.list || initialState.list
  },
  areLoading(state = initialState) {
    return state.player.areLoading || initialState.areLoading
  },
  areFailed(state = initialState) {
    return state.player.areFailed || initialState.areFailed
  },
  listError(state = initialState) {
    return state.player.listError || initialState.listError
  },
}

