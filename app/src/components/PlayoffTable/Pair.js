import React from 'react'
import PropTypes from 'prop-types'

import { createCounter } from '../helpers'

const Pair = ({ pair, children }) => {
  const childrenWithProps = props => React.Children.map(children, child =>
    React.cloneElement(child, props))

  return (
    <div className="pair">
      {
        createCounter(1, 2).map((game) => {
          const order = ((pair * 2) - 2) + game
          return childrenWithProps({ order, key: game })
        })
      }
    </div>
  )
}

Pair.propTypes = {
  pair: PropTypes.number,
  children: PropTypes.node,
}

export default Pair
