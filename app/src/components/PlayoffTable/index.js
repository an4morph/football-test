import React from 'react'
import PropTypes from 'prop-types'
import Stage from './Stage'
import './playoff.scss'

class PlayoffTable extends React.Component {
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
    const { games, stagesCount } = this.props

    return (
      <div className="playoff-table">
        {
          this.createCounter(1, stagesCount).map(stage => (
            <Stage
              key={stage}
              games={games}
              stage={stage}
            />
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
