import React from 'react'
import PropTypes from 'prop-types'

class CommandElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  findWinner = (game) => {
    if (game) {
      if (game.commands[0].score > game.commands[1].score) { return game.commands[0].name }
      return game.commands[1].name
    }
    return null
  }

  tryGuess = () => {
    const {
      games, type, stage, order,
    } = this.props
    const firstPrevGame = games.find(g => g.stage === stage + 2 && g.order === ((order + 1) * 2) - 1)
    const secondPrevGame = games.find(g => g.stage === stage + 2 && g.order === (order + 1) * 2)

    if (type === 'first' && firstPrevGame) {
      return this.findWinner(firstPrevGame)
    }
    if (type === 'second' && secondPrevGame) {
      return this.findWinner(secondPrevGame)
    }
    return null
  }

  generateCommandNameBlock = (name, className = '') => (
    <div className={`command-name ${className}`}>
      {name}
    </div>
  )

  renderCommand = (game) => {
    const index = this.props.type === 'first' ? 0 : 1
    if (game) return this.generateCommandNameBlock(game.commands[index].name)
    if (this.tryGuess()) return this.generateCommandNameBlock(this.tryGuess(), 'guessing')
    return this.generateCommandNameBlock('', 'empty')
  }

  render() {
    const {
      type, game, stage, order,
    } = this.props
    const index = type === 'first' ? 0 : 1

    return (
      <div className={`command ${type}`}>
        {this.renderCommand(game)}
        {game && <div className="command-score">{game.commands[index].score}</div> }
      </div>
    )
  }
}

CommandElement.propTypes = {
  type: PropTypes.string.isRequired,
}

export default CommandElement
