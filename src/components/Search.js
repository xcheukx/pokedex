/*
* @Author: 卓圳宝
* @Date:   2017-08-30 14:24:08
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-31 17:43:21
*/

import React from 'react'
import './search.scss'

const Search = ({ onChange }) => (
  <input className="input"
    type="text"
    onChange={onChange}
    placeholder="Enter pokemon name..."
  />
)

export default Search