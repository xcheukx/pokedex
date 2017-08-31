/*
* @Author: 卓圳宝
* @Date:   2017-08-29 17:24:43
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-31 16:57:56
*/

import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters,REQUEST_POKEMONS,RECEIVE_POKEMONS,FILTER_POKEMONS } from './../actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
		console.log(action.index);
    	return [
    	  ...state.slice(0, action.index),
    	  Object.assign({}, state[action.index], {
    	    completed: true
    	  }),
    	  ...state.slice(action.index + 1)
    	]
    default:
      return state
  }
}

const initialState = {
  isFetched: false,
  pokemons: [],
  displayedPokemons: []
}

function pokemon(state = initialState, action) {

    	let current_page = state.pokemons.page || 0;
  switch (action.type) {
    case REQUEST_POKEMONS:
      return {
        ...state,
        isFetched: true
      }

    case RECEIVE_POKEMONS:
      let pokemons = action.pokemons.map(pokemon => {
        let { url } = pokemon
        pokemon.id = url.substring(34, url.length - 1)

        return pokemon
      })

      return {
        ...state,
        pokemons,
        displayedPokemons: pokemons.slice(current_page, current_page + 60),
        isFetched: false
      }

    case FILTER_POKEMONS:
      let displayedPokemons = state.pokemons.filter(pokemon => {
        if (pokemon.name.includes(action.searchTerm.toLowerCase())) {
          return true
        }

        return false
      }).slice(current_page, current_page + 60)

      return {
        ...state,
        displayedPokemons
      }

    default:
      return state
  }

}

const todoApp = combineReducers({
  // visibilityFilter,
  // todos,
  pokemon
})

export default todoApp