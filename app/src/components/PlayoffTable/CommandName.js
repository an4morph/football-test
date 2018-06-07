import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const CommandName = ({
  name, className, onClick, commandId,
}) => {
  const handleClick = () => {
    onClick(commandId)
  }

  return (
    <Button
      disabled={!!className}
      onClick={handleClick}
      className={`command-name ${className}`}
    >
      {name}
    </Button>
  )
}

CommandName.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  commandId: PropTypes.number,
  onClick: PropTypes.func.isRequired,
}

export default CommandName
