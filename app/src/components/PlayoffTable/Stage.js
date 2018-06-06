import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Pair from './Pair'
import Game from './Game'
import { Typography } from '@material-ui/core'

const stageNames = [
  'Final', 'Semifinal', '1/4', '1/8', '1/16', '1/32',
]

class Stage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  createCounter = (from, to) => {
    const counter = []
    for (let i = from; i <= to; i += 1) {
      counter.push(i)
    }
    return counter
  }

  render() {
    const { games, stage } = this.props
    const pairCount = (2 ** (stage - 1)) / 2

    return (
      <div className="stage">
        <Paper className="stage-paper">
          <Typography>
            {stageNames[stage - 1]}
          </Typography>
        </Paper>
        {
          pairCount >= 1 && this.createCounter(1, pairCount).map(pair => (
            <Pair
              key={pair}

              games={games}
              pair={pair}
              stage={stage}
            />
          ))
        }
        {
          pairCount < 1 &&
          <div className="final-game">
            <Game
              games={games}
              order={1}
              stage={stage}
            />
          </div>
        }
      </div>
    )
  }
}

Stage.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  stage: PropTypes.number.isRequired,
}

export default Stage
