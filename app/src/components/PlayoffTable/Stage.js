import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Paper } from '@material-ui/core'

import Game from './Game'
import { createCounter } from '../helpers'

const stageNames = [
  'Final', 'Semifinal', '1/4', '1/8', '1/16', '1/32',
]

class Stage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      games, stage, children, getPlayers, players,
    } = this.props
    const pairCount = (2 ** (stage - 1)) / 2


    return (
      <div className="stage">
        <Paper className="stage-paper">
          <Typography>
            {stageNames[stage - 1]}
          </Typography>
        </Paper>
        {
          pairCount >= 1 && createCounter(1, pairCount).map((pair) => {
            const childrenWithProps = React.Children.map(children, child =>
              React.cloneElement(child, { pair, key: pair }))
            return childrenWithProps
          })
        }
        {
          pairCount < 1 &&
          <div className="final-game">
            <Game
              getPlayers={getPlayers}
              games={games}
              order={1}
              stage={stage}
              players={players}
            />
          </div>
        }
      </div>
    )
  }
}

Stage.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  players: PropTypes.arrayOf(PropTypes.object),
  stage: PropTypes.number.isRequired,
  children: PropTypes.node,
  getPlayers: PropTypes.func.isRequired,
}

export default Stage
