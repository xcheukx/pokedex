/*
* @Author: 卓圳宝
* @Date:   2017-08-30 14:24:08
* @Last Modified by:   卓圳宝
* @Last Modified time: 2017-08-30 14:30:09
*/

import React from 'react'

const Search = ({ onChange }) => (
  <input
    type="text"
    onChange={onChange}
    placeholder="Enter pokemon name..."
  />
)

export default Search