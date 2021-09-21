import React, { useContext } from "react";

import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ disp: 'flex', justifyContent: 'center' }}>
          <h1>{call.name} is calling: </h1>
          <button type="button" onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
  )
}

export default Notifications;