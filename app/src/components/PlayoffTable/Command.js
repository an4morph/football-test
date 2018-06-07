import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import CommandName from './CommandName'

const Command = ({
  games, order, stage, index, getPlayers,
}) => {
  const findWinner = (game) => {
    if (game.commands[0].score > game.commands[1].score) { return game.commands[0].name }
    return game.commands[1].name
  }

  const tryGuess = () => {
    const firstPrevGame = games.find(g => g.stage === stage + 1 && g.order === (order * 2) - 1)
    const secondPrevGame = games.find(g => g.stage === stage + 1 && g.order === order * 2)

    if (index === 0 && firstPrevGame) {
      return findWinner(firstPrevGame)
    }
    if (index === 1 && secondPrevGame) {
      return findWinner(secondPrevGame)
    }
    return null
  }

  const findGame = () => games.find(g => (g.order === order) && (g.stage === stage))

  const getCommandNameProps = (game) => {
    const props = {
      getPlayers,
      name: 'empty',
      className: 'empty',
      commandId: game ? game.commands[index].id : null,
    }
    const propsWith = newProps => Object.assign(props, newProps)

    if (game) {
      return propsWith({
        name: game.commands[index].name,
        className: '',
      })
    }
    if (tryGuess()) {
      return propsWith({
        name: tryGuess(),
        className: 'guessing',
      })
    }
    return props
  }

  return (
    <div>
      <Typography className={`command ${index ? 'second' : 'first'}`} component="div">
        <CommandName {...getCommandNameProps(findGame())} />
        {
          findGame() &&
          <div className="command-score">{findGame().commands[index].score}</div>
        }
      </Typography>
    </div>)
}


Command.propTypes = {
  index: PropTypes.number,
  games: PropTypes.arrayOf(PropTypes.object),
  stage: PropTypes.number.isRequired,
  order: PropTypes.number,
  getPlayers: PropTypes.func.isRequired,
}

export default Command
