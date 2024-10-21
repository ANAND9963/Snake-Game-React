import "./CSS/style.css";
import Instructions from "./Instructions";
import { useState } from "react";
import Snake from "./Snake";
import Food from "./Food";

export default function Board({ handleKeyPress, hasGameStarted }) {
  let [currScore, setcurrscore] = useState(0);
  let [highScore, sethighscore] = useState(0);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);

  // Corrected random food generation logic
  const generateFood = () => {
    let x = Math.floor(Math.random() * 20 + 1); // Correct multiplication
    let y = Math.floor(Math.random() * 20 + 1);
    return { x, y };
  };

//   const resetGame()=>{

//   };

  const move =(dir) =>{

    const snakeHead = {...snake[0]};

    if(dir ==="Up"){
        snakeHead.x--;

    }else if(dir === "Right"){

        snakeHead.y++;

    }else if (dir==="Down"){
        snakeHead.x++;
    }else {

      snakeHead.y--;
    }


    if(snakeHead.x < 0 || snakeHead.y < 0 || snakeHead.x ===20 || snakeHead.y === 20){
        // resetGame();
    }
    for (let i =1 ; i <snake.length; i++){
        if(snakeHead.x <= 0 && snakeHead.y <=0){
            // resetGame();
        }
    }

  };

//   const checkCollision =() =>{

//   }

//   const updateScore =() =>{

//   }

  const [food, setFood] = useState(generateFood);

  return (
    <div className="body">
      <div className="scores">
        <div id="currscore">{currScore.toString().padStart(3, "0")}</div>
        <div id="highScore">{highScore.toString().padStart(3, "0")}</div>
      </div>
      <div className="border1">
        <div className="border2">
          <div className="border3">
            <div id="box">
              {hasGameStarted ? (
                <>
                  {snake.map((pixel, index) => (
                    // Added return statement to correctly render Snake
                    <Snake key={index} pixel={pixel} />
                  ))}
                  <Food pixel={food} />
                </>
              ) : (
                <Instructions />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
