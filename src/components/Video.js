import React from "react";

const Video = ({ video }) => {
  return (
    <article>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <iframe
        title={video.title}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    </article>
  );
};

export default Video;
