import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt=""
        className="ui image"
      />
      <div className="content">
        <div> {video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
