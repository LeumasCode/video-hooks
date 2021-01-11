import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";

class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: result.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have 
        {this.state.videos.length}
      </div>
    );
  }
}

export default App;
