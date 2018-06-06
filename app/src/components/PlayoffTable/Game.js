import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Command from './Command'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      games, order, stage,
    } = this.props

    return (
      <Paper className="game">
        <Command
          index={0}
          games={games}
          stage={stage}
          order={order}
        />
        <Command
          index={1}
          games={games}
          stage={stage}
          order={order}
        />
      </Paper>
    )
  }
}

Game.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  stage: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
}

export default Game
