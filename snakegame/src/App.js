
import './App.css';
import Board from './components/Board';

import {useState, useEffect} from "react";

function App() {



  let [hasGameStarted,setHasGameStarted] = useState(false);
  let[dir,setDir] = useState("right");
  const handleKeyPress = (e) =>{
    // e.preventdefault();
    console.log("came " ,e);

    if(e.key ===" " || e.key === "Space"){
     
      setHasGameStarted(true)
    }else {
      switch (e.key) {
        case "ArrowUp":
          setDir = "up";
          break;
        case "ArrowDown":
          setDir = "down";
          break;
        case "ArrowLeft":
          setDir = "left";
          break;
        case "ArrowRight":
          setDir = "right";
          break;
        default:
          break;
      }
    }
    


  };

  const stopGame =() =>{
    setHasGameStarted(false);
  }
  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex={"0"}>
      
      <Board  hasGameStarted={hasGameStarted} stopGame={stopGame} dir ={dir} />
       
      <footer className='footer-txt'>Developed By: Anand</footer>
    </div>
  );
}

export default App;
