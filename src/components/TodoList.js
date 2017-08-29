/*
* @Author: 卓圳宝
* @Date:   2017-08-29 17:10:49
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-29 17:40:11
*/

// import React, { PropTypes } from 'react'
// import Todo from './Todo'

// const TodoList = ({ todos, onTodoClick }) => (
//   <ul>
//     {todos.map(todo =>
//       <Todo
//         key={todo.id}
//         {...todo}
//         onClick={() => onTodoClick(todo.id)}
//       />
//     )}
//   </ul>
// )

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

// export default TodoList
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onClick={() => this.props.onTodoClick(index)} />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}