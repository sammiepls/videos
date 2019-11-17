import React from "react";
import "./styles.scss";

const Video = ({ video }) => {
  return (
    <article class="Video">
      <h2>{video.title}</h2>
      <iframe
        title={video.title}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      <p>{video.description}</p>
    </article>
  );
};

export default Video;
