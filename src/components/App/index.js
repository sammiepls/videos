import React from "react";

import Search from "../Search";
import VideoList from "../VideoList";
import Video from "../Video";
import "./styles.scss";
import youtube from "../../apis/youtube";

class App extends React.Component {
  state = {
    videos: [],
    video: null,
  };

  handleSearchTerm = async term => {
    const response = await youtube.get("", {
      params: { q: term },
    });
    this.setState({
      videos: response.data.items,
      video: { ...response.data.items[0].snippet, videoId: response.data.items[0].id.videoId },
    });
  };

  handleVideoSelect = video => {
    this.setState({ video });
  };

  renderFeatureVideo() {
    if (!this.state.video) {
      return <div className="Video">No video selected</div>;
    }
    return <Video video={this.state.video} />;
  }

  render() {
    return (
      <main>
        <Search handleSearchTerm={this.handleSearchTerm} />
        {this.renderFeatureVideo()}
        <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
      </main>
    );
  }
}

export default App;
