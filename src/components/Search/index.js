import React from "react";
import "./styles.scss";

class Search extends React.Component {
  state = {
    searchTerm: "",
  };

  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onSearchSubmit = e => {
    e.preventDefault();
    this.props.handleSearchTerm(this.state.searchTerm);
  };

  render() {
    return (
      <form className="searchbar" onSubmit={this.onSearchSubmit}>
        <h1>Search for Video</h1>
        <input
          onChange={this.onInputChange}
          type="search"
          name="search"
          id="search"
          value={this.state.searchTerm}
        />
      </form>
    );
  }
}

export default Search;
