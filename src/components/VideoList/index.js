import React from "react";
import "./styles.scss";

import VideoItem from "../VideoItem";

const VideoList = props => {
  if (props.videos.length > 0) {
    return (
      <ul>
        {props.videos.map(({ id, snippet }) => {
          const video = { ...snippet, videoId: id.videoId };
          return (
            <li key={id.videoId} onClick={e => props.handleVideoSelect(video)}>
              <VideoItem video={video} />
            </li>
          );
        })}
      </ul>
    );
  }
  return null;
};

export default VideoList;
