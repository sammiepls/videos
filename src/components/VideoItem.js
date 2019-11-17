import React from "react";

const Video = ({ video }) => {
  return (
    <article>
      <h3>{video.title}</h3>
      <img alt={video.title} src={video.thumbnails.default.url} />
    </article>
  );
};

export default Video;
