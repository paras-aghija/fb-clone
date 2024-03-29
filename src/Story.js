import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'
function Story({ image, profileSrc, title,  }) {
    return (
        <div style={{background: `url(${image})`}} className="story">
            <Avatar src={profileSrc} className="story__avatar"/>
            <h4>{title}</h4>
        </div>
    )
}
export default Story
