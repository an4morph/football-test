import React from 'react'
import PropTypes from 'prop-types'
import Stage from './Stage'
import Pair from './Pair'
import Game from './Game'
import './playoff.scss'

class PlayoffTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { getGames } = this.props
    getGames()
  }

  createCounter = (from, to) => {
    const counter = []
    for (let i = from; i <= to; i += 1) {
      counter.push(i)
    }
    return counter
  }


  render() {
    const { games, stagesCount, getPlayers } = this.props

    return (
      <div className="playoff-table">
        {
          this.createCounter(1, stagesCount).map(stage => (
            <Stage
              key={stage}
              games={games}
              stage={stage}
              getPlayers={getPlayers}
            >
              <Pair>
                <Game
                  games={games}
                  stage={stage}
                  getPlayers={getPlayers}
                />
              </Pair>
            </Stage>
          ))
        }
      </div>
    )
  }
}

PlayoffTable.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  stagesCount: PropTypes.number.isRequired,
  getPlayers: PropTypes.func.isRequired,
  getGames: PropTypes.func.isRequired,
}

export default PlayoffTable
