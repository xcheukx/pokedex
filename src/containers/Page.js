/*
* @Author: 卓圳宝
* @Date:   2017-08-30 14:26:45
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-30 14:36:01
*/

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pokemon from '../components/Pokemon'
import Search from '../components/Search'
import * as pageActions from '../actions'

class Page extends Component {
  componentDidMount() {
    this.props.pageActions.fetchPokemons()
  }

  handleSearch(e) {
    this.props.pageActions.filterPokemons(e.target.value)
  }

  render() {
  	console.log(this.props);
    let { displayedPokemons, isFetched } = this.props.page

    let pokemons = displayedPokemons.map((pokemon, index) => {
      return <Pokemon pokemon={pokemon} key={index} />
    })

    return (
      <div className="pokemons__wrapper">
        <Search onChange={this.handleSearch.bind(this)} />
        <ul className="pokemons">
          {
            isFetched
            ?
            <p>Loading...</p>
            :
            pokemons
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.pokemon
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)