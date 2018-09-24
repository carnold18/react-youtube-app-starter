import React, { Component } from "react";

class SearchBar extends Component{
  render(){
    return (
      <div>
      <input placeholder="Search" onChange={e => this.props.changeSearch(e.target.value)}/>

    </div>
  )
  }
}

export default SearchBar
