
import './App.css';
import Board from './components/Board';

import {useState} from "react";

function App() {



  let [hasGameStarted,setHasGameStarted] = useState(false);
  let[dir,setDir] = useState("Right");
  const handleKeyPress = (e) =>{
    // e.preventdefault();
    if(e.key ===" " || e.key === "Space"){
     
      setHasGameStarted(true)
    }else {
      switch (e.key) {
        case "ArrowUp":
          if(dir!=="Down"){
            setDir("Up");
          }
          break;
        case "ArrowDown":
          if(dir!=="Up"){
            setDir("Down"); 
          }
          break;
        case "ArrowLeft":
          if(dir!=="Right"){
            setDir("Left");
          }
          break;
        case "ArrowRight":
          if(dir!=="Left"){
            setDir("Right");
          }
          break;
        default:
          break;
      }
    }
    


  };

  const stopGame =() =>{
    setHasGameStarted(false);
    setDir("Right");
  
  }
  return (
    <div className="app" onKeyDown={handleKeyPress} tabIndex={"0"}>
      
      <Board  hasGameStarted={hasGameStarted} stopGame={stopGame} dir ={dir} />
       
      <footer className='footer-txt'>Developed By: Anand</footer>
    </div>
  );
}

export default App;
