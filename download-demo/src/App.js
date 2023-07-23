import logo from './logo.svg';
import './App.css';
import Pdf from './components/Pdf';
import Photo from './components/Photo';
import Video from './components/Video';

function App() {                           //2022 EAlphabits.com, All Rights Reserved.
  return (
    <div className="App">
      <Pdf></Pdf>
      <hr></hr>
      <Photo />
      <hr></hr>
      <Video></Video>
    </div>
  );
}

export default App;
