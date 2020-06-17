import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { getVidoes } from '../apis/youtube';
import { useState } from 'react';
import { useEffect } from 'react';

const onFormSubmit = async (e, term, setVideos, setSelectedVideo) => {
  e.preventDefault();

  try {
    const videos = await getVidoes(term);
    setVideos(videos.data.items);
    setSelectedVideo(videos.data.items[0]);
  } catch (e) {
    console.log(e);
  }
};

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(undefined);

  return (
    <div className="ui container">
      <SearchBar
        onFormSubmit={(e, term) =>
          onFormSubmit(e, term, setVideos, setSelectedVideo)
        }
      />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
