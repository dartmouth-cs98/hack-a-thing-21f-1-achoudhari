import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const styles = {
  container: {
    background: 'url("https://wallpaperaccess.com/full/729666.jpg")',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
  appBar: {
    backgroundColor: 'white',
    padding: '5px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: '10px',
    marginBottom: '10px',
    fontSize: '30px',
  }
}

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.appBar}>Aditya's Video Chat App</div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App