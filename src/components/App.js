import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";
import VideoList from "./VideoList";

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
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
