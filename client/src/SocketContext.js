import React, { createContext, useState, useRef, useEffect } from "react";
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

// pass in the backend server for the context
const socket = io('http://localhost:5000');

const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState(null);
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');

  const video = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  // this runs when component mounts
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((stream) => {
      setStream(stream);

      video.current.srcObject = stream;
    });

    // on backend we emit "me" and send ID, here we want to retrieve that ID
    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivedCall: true, from, name: callerName, signal });
    });

  }, []);
  const answerCall = () => {
    setCallAccepted(true);

    // set up a new Peer
    // initiator is false because here we are accepting the call not initializing it
    // we also need to pass in the stream that we got from media devices
    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', {signal: data, to: call.from})
    });

    peer.on('stream', (currStream) =>  {
      userVideo.current.srcObject = currStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  }

  const callUser = (id) => {
    // initiator should be set to true since we are initiating the call
    const peer = new Peer({ initiator: true, trickle: false, stream }); 

    peer.on('signal', (data) => {
      socket.emit('callUser', {userToCall: id, signalData: data, from: me, name})
    });

    peer.on('stream', (currStream) =>  {
      userVideo.current.srcObject = currStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  }

  const leaveCall = () => {
    setCallEnded(true);

    // end the connection
    connectionRef.current.destroy();

    window.location.reload();
  }

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      video,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
    }}>
      {children}
    </SocketContext.Provider>
  );
}

export { ContextProvider, SocketContext }