import React, {useContext, useState} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

const Options = ({children}) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div>
      <div>
        <input aria-label="name" value={name} onChange={(e) => setName(e.target.value)} />
        <CopyToClipboard text={me}>
          <button type="button">Copy your ID</button>
        </CopyToClipboard>
      </div>
      <div>
        <input aria-label="idToCall" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
        {callAccepted && !callEnded ? <button type="button" onClick={leaveCall}>End Call</button> : <button type="button" onClick={() => callUser(idToCall)}>Make Call</button>}
      </div>
      {children}
    </div>
  )
}

export default Options;