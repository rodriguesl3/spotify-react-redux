import React from 'react'
import PropTypes from 'prop-types'

export default Welcome = (props) => {
  return (
    <div>
      Welcome {props.userName || "Visitante"}
    </div>
  )
}

componentName.propTypes = {
    userName: React.propTypes.string,
}
