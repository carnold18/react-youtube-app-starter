import React, { Component } from "react";

class VideoTile extends Component{

  render(){
    const embedUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    return (

      <div className="eight wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe src={embedUrl} frameBorder="0" />
          </div>
        </div>
        <div className="ui segment">
          <h4>{this.props.video.snippet.title}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
      </div>

    )
  }
}

export default VideoTile
