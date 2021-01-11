import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";

class App extends Component {
  onTermSubmit = async (term) => {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
