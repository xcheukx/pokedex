/*
* @Author: 卓圳宝
* @Date:   2017-08-30 14:26:11
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-31 16:54:19
*/

import React from 'react'
import './pokemon.scss'

const Pokemon = ({ pokemon }) => {
	let pokemon_id = (/\/([0-9]{1,3})\//.exec(pokemon.url)[1]) || pokemon.id;
	// console.log(pokemon_id);
	return (
	  <li className="pokemons__item">
		<div className="pokemons__id">{pokemon_id}</div>
	    <div className="pokemons__img"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_id}.png`}/></div>
	    <div className="pokemons__name">{pokemon.name}</div>
	  </li>
	)
}

export default Pokemon