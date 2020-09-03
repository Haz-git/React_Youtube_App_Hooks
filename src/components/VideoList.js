import React from 'react';

const VideoList = ({ ytResponse }) => {

    const videoMap = ytResponse.map((video) => {
        return (
            <div key={video.id.videoId}>
                <h1 className="ui header">{video.snippet.title}</h1>
                <div>
                    {video.snippet.description}
                </div>
            </div>
        )
    })

    return (
        <div>{videoMap}</div>
    )
}

export default VideoList;