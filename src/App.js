import React from 'react';
import './App.css';
import './components/Welcome';
import Welcome from './components/Welcome';
// import the npm package's component
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <Welcome
        name = 'Elena'
      >
      </Welcome>

      {/* <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      <ReactPlayer url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"playing/> */}
               <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />
    </div>
  );
}

export default App;
