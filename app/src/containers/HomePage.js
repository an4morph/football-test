import React from 'react'
import { connect } from 'react-redux'

import HomePage from '../components/HomePage'

import { getGames } from '../store/actions/games'
import { fromGames } from '../store/selectors'

export const HomePageContainer = props => <HomePage {...props} />

export const mapStateToProps = state => ({
  games: fromGames.getList(state),
  gamesAreLoading: fromGames.areLoading(state),
  gamesAreFailed: fromGames.areFailed(state),
  gamesError: fromGames.listError(state),
})
export const mapDispatchToProps = dispatch => ({
  getGames: params => dispatch(getGames(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
