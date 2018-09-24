import React, { Component } from "react";

import SearchBar from './SearchBar'
import VideoTile from './VideoTile'
import VideoList from './VideoList'
import keys from './keys'
import _ from 'lodash'


class YouTubeContainer extends Component{

  constructor(){
    super();
    this.state = {
      search: 'science',
      videos: [],
      selectedVideo: null,
      loading: true,
    }

  }

componentDidMount(){
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this.state.search}&type=video`)
  .then(resp => resp.json())
  .then((data) => {
    this.setState({videos: data.items, selectedVideo: data.items[0], loading: false})
  })
}

changeSelectedVideo = (video) => {
  this.setState({selectedVideo: video})
}

changeSearch = (theSearch) => {
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${theSearch}&type=video`)
  .then(resp => resp.json())
  .then((data) => {
    this.setState({search: theSearch, videos: data.items, selectedVideo: data.items[0], loading: false})
  })


}

render(){

  const videoSearch = _.debounce(term => {
    this.changeSearch(term);
  }, 2000);
return (
  <div>
  {this.state.loading
    ? <div>Loading... </div>
    :  <div>
      <SearchBar changeSearch={videoSearch}/>
      <VideoTile video={this.state.selectedVideo} />
      <VideoList videos={this.state.videos} selectedVideo={this.state.selectedVideo} changeSelectedVideo ={this.changeSelectedVideo}/>
      </div>
}
</div>
)
}
}
 export default YouTubeContainer
