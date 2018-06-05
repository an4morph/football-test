import React from 'react'
import PropTypes from 'prop-types'
import PlayoffTable from './PlayoffTable'
import './elem.scss'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { getGames } = this.props
    getGames()
  }

  render() {
    const { games, gamesAreLoading, gamesAreFailed } = this.props
    console.log()

    return (
      <div className="main">
        <h1>Home page</h1>
        <PlayoffTable games={games} stagesCount={3} />
      </div>
    )
  }
}

HomePage.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object),
  gamesAreLoading: PropTypes.bool,
  gamesAreFailed: PropTypes.bool,
  getGames: PropTypes.func.isRequired,
}

export default HomePage
