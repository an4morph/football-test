import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class Command extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleOpenPlayersList = () => {
    const commandId = this.findGame().commands[this.props.index].id
    this.setState({ open: true })
  }
  handleClosePlayersList = () => {
    this.setState({ open: false })
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
    <Button
      disabled={!!className}
      onClick={this.handleOpenPlayersList}
      className={`command-name ${className}`}
    >
      {name}
    </Button>
  )

  findGame = () => {
    const { games, order, stage } = this.props
    return games.find(g => (g.order === order) && (g.stage === stage))
  }

  renderCommandName = (game) => {
    const { index } = this.props

    if (game) return this.generateCommandNameBlock(game.commands[index].name)
    if (this.tryGuess()) return this.generateCommandNameBlock(this.tryGuess(), 'guessing')
    return this.generateCommandNameBlock('empty', 'empty')
  }


  render() {
    const { index } = this.props
    const game = this.findGame()

    return (
      <div>
        <Typography className={`command ${index ? 'second' : 'first'}`} component="div">
          {this.renderCommandName(game)}
          {game && <div className="command-score">{game.commands[index].score}</div> }
        </Typography>

        <Dialog
          open={this.state.open}
          onClose={this.handleClosePlayersList}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Command list</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClosePlayersList} color="primary" autoFocus>
          OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>)
  }
}

Command.propTypes = {
  index: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(PropTypes.object),
  stage: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
}

export default Command
