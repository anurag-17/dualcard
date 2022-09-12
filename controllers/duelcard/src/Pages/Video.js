import React from 'react'
import myVideo from '../media/M_03292018202006_00000000U2940605_1_001-1.MP4'

const Video = () => {
  return (
    <div>Video
         <div className='player-wrapper'>
        <ReactPlayer
          url={myVideo}
          // ...
        />
      </div>
    </div>
  )
}

export default Video