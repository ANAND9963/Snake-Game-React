import "./CSS/style.css";
import Instructions from "./Instructions";
import { useState, useEffect } from "react";
import Snake from "./Snake";
import Food from "./Food";

export default function Board({
  handleKeyPress,
  hasGameStarted,
  dir,
  stopGame,
}) {
  let [currScore, setcurrscore] = useState(0);
  let [highScore, sethighscore] = useState(0);
  let [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  let [GameSpeedDelay, setGameSpeed] = useState(250);
  let [flag , setFlag] = useState(false);

  useEffect(() => {
    const interval = setInterval(move, GameSpeedDelay);
    return (() => clearInterval(interval));
  });

  const move = () => {
    if (!hasGameStarted) return;

    const snakeHead = { ...snake[0] };
    
    if (dir === "Up") {
      snakeHead.x--;
    } else if (dir === "Right") {
      snakeHead.y++;
    } else if (dir === "Down") {
      snakeHead.x++;
    } else {
      snakeHead.y--;
    }

    if (snakeHead.x < 1 || snakeHead.y < 1 || snakeHead.x > 20 || snakeHead.y > 20)
    {
      resetGame();
      return;
    }
    for (let i = 1; i < snake.length; i++) {
      let current = snake[i];
      if (snakeHead.x === current.x && snakeHead.y === current.y) {
        resetGame();
        return;
      }
    }

    let newSnake = [...snake];
    newSnake.unshift(snakeHead);
    if (snakeHead.x === food.x && snakeHead.y === food.y) {
      let newFood =generateFood();
      setFood(newFood);
      increaseSpeed();
    } else {
      newSnake.pop();
    }
    setcurrscore(newSnake.length-1);
    setSnake(newSnake);
  };
  const increaseSpeed = () => {
    if(GameSpeedDelay > 150){
     GameSpeedDelay -= 20;
    }else if(GameSpeedDelay > 100){
     GameSpeedDelay -= 10;
    }else {
     GameSpeedDelay -= 5;
    }
    setGameSpeed(GameSpeedDelay);
 };
 
 const resetGame = () => {
  
  
  setFlag(true);
  setSnake([{x:5,y:5}])
  setFood(generateFood());
  sethighscore(Math.max(currScore, highScore));
  setcurrscore(0);
  setGameSpeed(250);
  stopGame();
  
};

  // Corrected random food generation logic
  const generateFood = () => {
    let x = Math.floor(Math.random() * 20 + 1); // Correct multiplication
    let y = Math.floor(Math.random() * 20 + 1);
    return { x, y };
  };

  const [food, setFood] = useState(generateFood);
  

  return (
    <div >
      <div className="scores">
        <div id="currscore">{currScore.toString().padStart(3, "0")}</div>
        {flag && (!hasGameStarted) && (
          <div id="highScore">{highScore.toString().padStart(3, "0")}</div>
        )}
      </div>
      <div className="border1">
        <div className="border2">
          <div className="border3">
            <div id="box">
              {hasGameStarted ? (
                <>
                  {snake.map((pixel, index) => (
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
