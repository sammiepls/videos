import React from "react";

import Search from "./Search";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    searchTerm: "",
  };

  handleSearchTerm = term => {
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <div>
        <Search handleSearchTerm={this.handleSearchTerm} />
        You searched for {this.state.searchTerm}
        <VideoList />
      </div>
    );
  }
}

export default App;
