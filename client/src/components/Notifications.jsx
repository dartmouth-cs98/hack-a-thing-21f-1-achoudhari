import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import { SocketContext } from "../SocketContext";

const styles = {
  icon: {
    fontSize: '20px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  answerCall: {
    color: 'green',
  },
  ignoreCall: {
    color: 'red',
  }
}


const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall } = useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>{!!call.name ? call.name : 'Someone'} is calling: </h1>
          <FontAwesomeIcon icon={faCheck} onClick={answerCall} style={{...styles.icon, ...styles.answerCall}}/>
          <FontAwesomeIcon icon={faTimes} onClick={leaveCall} style={{...styles.icon, ...styles.ignoreCall}}/>
        </div>
      )}
    </>
  )
}

export default Notifications;