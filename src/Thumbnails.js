import React, { Component } from "react";

class Thumbnails extends Component{
  render(){
    console.log(this.props)
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return (

      <div className="item" onClick= {e => this.props.changeVideo(this.props.video)} >
      <div className="ui small image">
        <img src={imageUrl} />
      </div>
      <div className="content">
        {this.props.video.snippet.title}
      </div>
      </div>


    )
}
}
export default Thumbnails
