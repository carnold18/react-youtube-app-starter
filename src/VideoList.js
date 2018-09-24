import React, { Component } from "react";
import Thumbnails from './Thumbnails'

const VideoList = ({videos, selectedVideo, changeSelectedVideo}) =>{

    const filteredVideos = videos.filter(video => video !== selectedVideo)

    const videoItems = filteredVideos.map(video => <Thumbnails key={video.etag} video={video} changeVideo = {changeSelectedVideo}/>)

      return (
        <div>
            <div className="four wide column">
            <div className="ui relaxed items">
              {videoItems}
            </div>
          </div>
        </div>
          )


}
export default VideoList
// const VideoList extends Component{
//   render(){
//     return (
//       <div>VideoList</div>
//       <div className="four wide column">
//       <div className="ui relaxed items">
//         {videoItems}
//       </div>
//     </div>
//     )
//   }
// }
