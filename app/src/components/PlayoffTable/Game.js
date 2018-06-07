import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, List,
  ListItem, ListItemText,
} from '@material-ui/core'
import Command from './Command'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleShowPlayers = (commandId) => {
    this.handleOpenModal()
    this.props.getPlayers(commandId)
  }

  handleOpenModal = () => {
    this.setState({ open: true })
  }
  handleCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const {
      games, order, stage, players,
    } = this.props

    return (
      <Paper className="game">
        <Command
          index={0}
          games={games}
          stage={stage}
          order={order}
          onClick={this.handleShowPlayers}
        />
        <Command
          index={1}
          games={games}
          stage={stage}
          order={order}
          onClick={this.handleShowPlayers}
        />


        <Dialog
          open={this.state.open}
          onClose={this.handleCloseModal}
        >
          <DialogTitle>Players list</DialogTitle>
          <DialogContent>
            <List component="div">
              {
                players && players.map(p => (
                  <ListItem key={p.name}>
                    <ListItemText primary={p.name} />
                  </ListItem>))
              }
            </List>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleCloseModal}
              color="primary"
              autoFocus
            >OK
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    )
  }
}

Game.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  players: PropTypes.arrayOf(PropTypes.object),
  stage: PropTypes.number.isRequired,
  order: PropTypes.number,
  getPlayers: PropTypes.func.isRequired,
}

export default Game
