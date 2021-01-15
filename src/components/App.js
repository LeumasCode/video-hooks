import React, { useEffect, useState } from "react";
import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, search] = useVideos("buildings");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  // setSelectedVideo(result.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
