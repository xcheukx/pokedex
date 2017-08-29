/*
* @Author: 卓圳宝
* @Date:   2017-08-29 17:25:58
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-29 17:37:55
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}