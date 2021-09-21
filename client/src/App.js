import React from 'react';
import './styles.css';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const styles = {
  container: {
    'background': 'url("https://wallpaperaccess.com/full/729666.jpg")',
    'height': '100vh',
  }
}

const App = () => {
  return (
    <div style={styles.container}>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App