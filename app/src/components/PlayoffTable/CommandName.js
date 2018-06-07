import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

class CommandName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleOpenPlayersList = () => {
    const { commandId, getPlayers } = this.props
    this.setState({ open: true })
    getPlayers(commandId)
  }

  handleClosePlayersList = () => {
    this.setState({ open: false })
  }

  render() {
    const { name, className } = this.props
    return (
      <div>
        <Button
          disabled={!!className}
          onClick={this.handleOpenPlayersList}
          className={`command-name ${className}`}
        >
          {name}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClosePlayersList}
        >
          <DialogTitle>Command list</DialogTitle>
          <DialogContent>
            List
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClosePlayersList}
              color="primary"
              autoFocus
            >OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>)
  }
}

CommandName.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  commandId: PropTypes.number,
  getPlayers: PropTypes.func.isRequired,
}

export default CommandName
