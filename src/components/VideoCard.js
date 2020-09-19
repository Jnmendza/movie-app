import React from 'react'
import "./VideoCard.css"

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src="" alt="" />
            <p>This is a film about ...</p>
            <h2>Movie Title</h2>
            <p>Number of likes</p>
        </div>
    )
}

export default VideoCard
