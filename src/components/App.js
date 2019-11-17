import React from "react";

import Search from "./Search";
import VideoList from "./VideoList";
import Video from "./Video";

import youtube from "../apis/youtube";

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
    });
  };

  handleVideoSelect = video => {
    this.setState({ video });
  };

  renderFeatureVideo() {
    if (!this.state.video) {
      return <div>No video selected</div>;
    }
    return <Video video={this.state.video} />;
  }

  render() {
    return (
      <div>
        <Search handleSearchTerm={this.handleSearchTerm} />
        {this.renderFeatureVideo()}
        <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
      </div>
    );
  }
}

export default App;
