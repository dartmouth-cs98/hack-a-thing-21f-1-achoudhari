import React, {ReactDOM} from 'react';
import { Typography, AppBar } from '@material-ui/core';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const App = () => {
  return (
    <div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App