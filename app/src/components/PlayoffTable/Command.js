import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

class Command extends React.Component {
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
      games, index, stage, order,
    } = this.props
    const firstPrevGame = games.find(g => g.stage === stage + 1 && g.order === ((order) * 2) - 1)
    const secondPrevGame = games.find(g => g.stage === stage + 1 && g.order === (order) * 2)

    if (index === 0 && firstPrevGame) {
      return this.findWinner(firstPrevGame)
    }
    if (index === 1 && secondPrevGame) {
      return this.findWinner(secondPrevGame)
    }
    return null
  }

  generateCommandNameBlock = (name, className = '') => (
    <div className={`command-name ${className}`}>
      {name}
    </div>
  )

  renderCommandName = (game) => {
    const { index } = this.props

    if (game) return this.generateCommandNameBlock(game.commands[index].name)
    if (this.tryGuess()) return this.generateCommandNameBlock(this.tryGuess(), 'guessing')
    return this.generateCommandNameBlock('', 'empty')
  }

  render() {
    const {
      index, games, stage, order,
    } = this.props
    const game = games.find(g => (g.order === order) && (g.stage === stage))

    return (
      <Typography className={`command ${index ? 'second' : 'first'}`} component="div">
        {this.renderCommandName(game)}
        {game && <div className="command-score">{game.commands[index].score}</div> }
      </Typography>
    )
  }
}

Command.propTypes = {
  index: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(PropTypes.object),
  stage: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
}

export default Command
