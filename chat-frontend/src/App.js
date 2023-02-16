
import './App.css';
import Header from './components/Header/Header';
import VideoPlayer from './components/Video/Video';
import ID from './components/ID/ID';
import Call from './components/Call/call';

function App() {
  return (
    <div className="App">
      <Header />
      <ID>
        <Call />
      </ID>
      <VideoPlayer />
    </div>
  );
}

export default App;
