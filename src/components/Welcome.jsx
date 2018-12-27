import React from 'react'
import PropTypes from 'prop-types'

export const Welcome = (props) => {
  return (
    <div>
      Welcome {props.userName || "Visitante"}
    </div>
  )
}

Welcome.propTypes = {
    //userName: React.PropTypes.string,
}
