import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import PlayoffTable from './PlayoffTable/'
import './index.scss'


class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { getGames } = this.props
    getGames()
  }

  render() {
    const { games, gamesAreLoading, gamesAreFailed } = this.props
    console.log()

    return (
      <div className="main">
        <Typography className="main-title">Football play-off table</Typography>
        <PlayoffTable
          games={games}
          stagesCount={4}
        />
      </div>
    )
  }
}

HomePage.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  gamesAreLoading: PropTypes.bool,
  gamesAreFailed: PropTypes.bool,
  getGames: PropTypes.func.isRequired,
}

export default HomePage
