import React from 'react';

const VideoDetail = (props) => {
  const { video } = props;

  return video ? (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          title="video player"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  ) : null;
};

export default VideoDetail;
