import React from 'react'
import PropTypes from 'prop-types'
import Game from './Game'

class Pair extends React.Component {
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
    const {
      games, pair, stage,
    } = this.props

    return (
      <div className="pair">
        {
          this.createCounter(1, 2).map((game) => {
            const order = ((pair * 2) - 2) + game
            return (
              <Game
                key={game}

                games={games}
                order={order}
                stage={stage}
              />
            )
          })
        }
      </div>
    )
  }
}

Pair.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  stage: PropTypes.number.isRequired,
  pair: PropTypes.number.isRequired,
}

export default Pair
