import React from "react";
import "./styles.scss";

const VideoItem = ({ video }) => {
  return (
    <article className="video-item">
      <h3>{video.title}</h3>
      <img alt={video.title} src={video.thumbnails.default.url} />
    </article>
  );
};

export default VideoItem;
