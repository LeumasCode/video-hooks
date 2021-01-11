import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";
import VideoList from "./VideoList";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: result.data.items });
  };

  onVideoSelect = (video) => {
    console.log("video from the app", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
