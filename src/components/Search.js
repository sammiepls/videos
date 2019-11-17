import React from "react";

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
      <form onSubmit={this.onSearchSubmit}>
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
