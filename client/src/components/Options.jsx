import React, {useContext, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faPhoneSlash, faCopy } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

const styles = {
  container: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '400px',
    marginBottom: '10px',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '75px',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    fontSize: '20px',
    cursor: 'pointer',
  },
  makeCall: {
    color: 'green',
  },
  endCall: {
    color: 'red',
  }
}

const Options = ({children}) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <div style={styles.inputWrapper}>
          <h2>Name</h2>
          <input aria-label="name" value={name} onChange={(e) => setName(e.target.value)} />
          <div style={{display: 'flex'}}>
            <div style={{marginRight: '5px'}}>Copy your ID</div>
            <CopyToClipboard text={me}>
              <FontAwesomeIcon icon={faCopy} style={styles.icon}/>
            </CopyToClipboard>
          </div>
        </div>
        <div style={styles.inputWrapper}>
          <h2>ID to Call</h2>
          <input aria-label="idToCall" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
          {callAccepted && !callEnded ? <FontAwesomeIcon style={{...styles.icon, ...styles.endCall}} icon={faPhoneSlash} onClick={leaveCall} /> : <FontAwesomeIcon style={{...styles.icon, ...styles.makeCall}} icon={faPhoneSquare} onClick={() => callUser(idToCall)}/>}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Options;