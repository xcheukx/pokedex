/*
* @Author: 卓圳宝
* @Date:   2017-08-29 17:11:09
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-29 17:30:37
*/

import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link