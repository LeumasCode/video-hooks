import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("buildings");
  }, []);

  const onTermSubmit = async (term) => {
    const result = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(result.data.items);
    setSelectedVideo(result.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
