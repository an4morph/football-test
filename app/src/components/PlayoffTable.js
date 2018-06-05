import React from 'react'
import PropTypes from 'prop-types'


class PlayoffTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getPartGames = part => this.props.games.filter(game => game.part === part)

  createCounter = (count) => {
    const counter = []
    for (let i = 0; i < count; i += 1) {
      counter.push(i)
    }
    return counter
  }

  tryToGuessWho = (stage, order, commandOrder) => {
    const { games } = this.props

    const firstGame = games.find(g => g.stage === stage + 2 && g.order === (order + 1) * 2)
    const secondGame = games.find(g => g.stage === stage + 2 && g.order === ((order + 1) * 2) - 1)

    const findWinner = (game) => {
      if (game) {
        if (game.commands[0].score > game.commands[1].score) { return game.commands[0].name }
        return game.commands[1].name
      }
      return null
    }

    if (commandOrder === 'first' && firstGame) return findWinner(firstGame)
    if (commandOrder === 'second' && firstGame) return findWinner(secondGame)

    return 'nun'
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
                    <div className="command first-command">
                      <div className="command-name">
                        {gameItem ? gameItem.commands[0].name : this.tryToGuessWho(stage, order, 'first')}
                      </div>
                      <div className="command-score">
                        {gameItem ? gameItem.commands[0].score : 'unknown'}
                      </div>
                    </div>
                    <div className="command second-command">
                      <div className="command-name">
                        {gameItem ? gameItem.commands[1].name : this.tryToGuessWho(stage, order, 'second')}
                      </div>
                      <div className="command-score">
                        {gameItem ? gameItem.commands[1].score : 'unknown'}
                      </div>
                    </div>
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
