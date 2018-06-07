import React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import PlayoffTable from '../components/PlayoffTable/'

import { getGames } from '../store/actions/games'
import { getPlayers } from '../store/actions/players'
import { fromGames, fromPlayers } from '../store/selectors'

export const HomePageContainer = props => (
  <div className="main">
    <Typography className="main-title">Football play-off table</Typography>
    <PlayoffTable
      stagesCount={4}
      {...props}
    />
  </div>
)

export const mapStateToProps = state => ({
  games: fromGames.getList(state),
  gamesAreLoading: fromGames.areLoading(state),
  gamesAreFailed: fromGames.areFailed(state),
  gamesError: fromGames.listError(state),

  players: fromPlayers.getList(state),
  playersAreLoading: fromPlayers.areLoading(state),
  playersAreFailed: fromPlayers.areFailed(state),
  playersError: fromPlayers.listError(state),
})
export const mapDispatchToProps = dispatch => ({
  getGames: params => dispatch(getGames(params)),
  getPlayers: commandId => dispatch(getPlayers(commandId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
