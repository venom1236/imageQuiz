
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ImageQuiz from './Pages/ImageQuiz';

import AudioPlayer from './Pages/AudioPlayer';
import SingleWord from './Pages/SingleWord'
import WordValidator from './Pages/WordValidator'
// import  AudioValidationComponent from './Pages/AudioValidationComponent'
// import SentenceEditor from './Pages/SentenceEditor'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
    <Routes>
    <Route />
    </Routes>
    <ImageQuiz/>
 
    {/* <AudioPlayer/> */}
    {/* <SingleWord/> */}
    {/* <WordValidator/> */}
  
    {/* <SentenceEditor/> */}

    
    </BrowserRouter>
    </div>
  );
}

export default App;
