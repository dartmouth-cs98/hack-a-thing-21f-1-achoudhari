import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const styles = {
  video: {
    width: '550px',
    height: '300px',
  },
  streamWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderRadius: '10px',
  },
  videoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },

}

const VideoPlayer = () => {
  const { name, callAccepted, video, userVideo, callEnded, stream, call  } = useContext(SocketContext);
  return (
    <div style={styles.streamWrapper}>
      {!!stream && (
        <div style={styles.videoWrapper}>
          <div style={{fontSize: '30px'}}>{name || ''}</div>
          <video playsInline muted ref={video} autoPlay style={styles.video}/>
        </div>
        )}

      {(callAccepted && !callEnded &&
         <div style={styles.videoWrapper}>
          <div style={{fontSize: '30px'}}>{call.name || ''}</div>
          <video playsInline ref={userVideo} autoPlay style={styles.video}/>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer;