import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const styles = {
  video: {
    width: '550px',
    height: '300px',
  }
}

const VideoPlayer = () => {
  const { name, callAccepted, video, userVideo, callEnded, stream, call  } = useContext(SocketContext);
  return (
    <div>
      {!!stream && (
        <div>
          <div>{name || 'Name'}</div>
          <video playsInline muted ref={video} autoPlay style={styles.video}/>
        </div>
        )}

      {(callAccepted && !callEnded &&
        <div>
          <div>{call.name || 'Name'}</div>
          <video playsInline ref={userVideo} autoPlay style={styles.video}/>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer;