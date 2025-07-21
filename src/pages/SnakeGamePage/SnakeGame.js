import { Apple } from "./Apple";
import { Snake } from "./Snake";

export function initSnakeGame(canvas, onScoreUpdate, setIsGameRunnind) {
  const ctx = canvas.getContext("2d");

  const width = canvas.width;
  const height = canvas.height;
  const blockSize = 10;
  const widthInBlocks = width / blockSize;
  const heightInBlocks = height / blockSize;
  let score = 0;
  let intervalId;
  let snake;
  let apple;

  const updateScore = () => {
    score++;

    if (onScoreUpdate) onScoreUpdate(score);
  };

  const drawBorder = () => {
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
  };

  // const drawScore = () => {
  //   ctx.font = "20px Courier";
  //   ctx.fillStyle = "Black";
  //   ctx.textAlign = "left";
  //   ctx.textBaseline = "top";
  //   ctx.fillText("Score: " + score, blockSize, blockSize);
  // };

  var gameOver = function () {
    clearInterval(intervalId);
    ctx.font = "60px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game over", width / 2, height / 2);
    setIsGameRunnind(false);
  };

  const start = function () {
    score = 0;

    snake = new Snake();
    snake.draw(ctx, blockSize);

    apple = new Apple();
    apple.draw(ctx, blockSize);

    intervalId = setInterval(function () {
      ctx.clearRect(0, 0, width, height);
      // drawScore();
      snake.move(gameOver, updateScore, apple, widthInBlocks, heightInBlocks);
      snake.draw(ctx, blockSize);
      apple.draw(ctx, blockSize);
      drawBorder();
    }, 100);
  };

  drawBorder();

  return {
    start,
    setDirection: (dir) => snake.setDirection(dir),
    stop: () => clearInterval(intervalId),
    score,
  };
}
