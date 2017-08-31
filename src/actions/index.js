/*
* @Author: 卓圳宝
* @Date:   2017-08-29 17:24:14
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-30 16:45:17
*/

/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const REQUEST_POKEMONS = 'REQUEST_POKEMONS'
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS'
export const FILTER_POKEMONS = 'FILTER_POKEMONS'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

// export function requestPokemons() {
//   return {
//     type: REQUEST_POKEMONS
//   }
// }

function receivePokemons(json) {
  return {
    type: RECEIVE_POKEMONS,
    pokemons: json.results
  }
}

export function fetchPokemons() {

  return dispatch => {
    return fetch(`http://localhost:3004/pokemons/`)
      .then(response => response.json())
      .then(json => dispatch(receivePokemons(json)))
  }

}

function requestPokemons(json) {
  return {
    type: REQUEST_POKEMONS,
    pokemons: json.results
  }
}
export function filterPokemons(searchTerm) {
  // return {
  //   type: FILTER_POKEMONS,
  //   searchTerm
  // }
  return dispatch => {
    return fetch(`/api/v2/pokemon/${searchTerm}`)
      .then(response => response.json())
      .then(json => dispatch(requestPokemons(json)))
  }
}