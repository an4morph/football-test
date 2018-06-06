import React from 'react'
import PropTypes from 'prop-types'
import CommandElement from './CommandElement'


class PlayoffTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  createCounter = (count) => {
    const counter = []
    for (let i = 0; i < count; i += 1) {
      counter.push(i)
    }
    return counter
  }


  render() {
    const { games, stagesCount } = this.props

    return (
      <div className="playoff-table">
        {
          this.createCounter(stagesCount).map(stage => (
            <div key={stage} className="stage">
              {this.createCounter(2 ** stage).map((order) => {
                const gameItem = games.find(g => (g.order === order + 1) && (g.stage === stage + 1))
                return (
                  <div className="pair" key={order}>
                    <CommandElement
                      type="first"
                      game={gameItem}
                      games={games}
                      stage={stage}
                      order={order}
                    />
                    <CommandElement
                      type="second"
                      game={gameItem}
                      games={games}
                      stage={stage}
                      order={order}
                    />
                  </div>
                )
              })}
            </div>
          ))
        }
      </div>
    )
  }
}

PlayoffTable.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  stagesCount: PropTypes.number.isRequired,
}

export default PlayoffTable
