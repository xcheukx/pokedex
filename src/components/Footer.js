/*
* @Author: 卓圳宝
* @Date:   2017-08-29 17:11:47
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-29 17:41:13
*/
// import React from 'react'
// import FilterLink from '../containers/FilterLink'

// const Footer = () => (
//   <p>
//     Show:
//     {" "}
//     <FilterLink filter="SHOW_ALL">
//       All
//     </FilterLink>
//     {", "}
//     <FilterLink filter="SHOW_ACTIVE">
//       Active
//     </FilterLink>
//     {", "}
//     <FilterLink filter="SHOW_COMPLETED">
//       Completed
//     </FilterLink>
//   </p>
// )

// export default Footer
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name
    }
    return (
// eslint-disable-next-line
      <a href='javascript:void(0);' onClick={e => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }

  render() {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        .
      </p>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}