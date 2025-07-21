import { useRef, useEffect, useState } from "react";
import { initSnakeGame } from "./SnakeGame";
import styles from "./SnakeGamePage.module.css";

export const SnakeGamePage = () => {
  const canvasRef = useRef();
  const gameRef = useRef(null);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [score, setScore] = useState(0);

  const directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
  };

  const handleStartClick = () => {
    if (gameRef.current) {
      gameRef.current.stop();
      gameRef.current.start();
      setScore(0);
      setIsGameRunning(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      var newDirection = directions[e.keyCode];

      if (newDirection && gameRef.current) {
        gameRef.current.setDirection(newDirection);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (canvasRef.current) {
      gameRef.current = initSnakeGame(
        canvasRef.current,
        setScore,
        setIsGameRunning
      );
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.game}>
      <div>
        <div className={styles.score}>Score: {score}</div>
        <div className={styles.wrapper}>
          <div className={styles.gwindow}>
            <canvas id="canvas" width="400" height="400" ref={canvasRef} />
          </div>
          <div className={styles.info}>
            <button onClick={handleStartClick} className={styles.btn}>
              {isGameRunning ? "Reset game" : "Start"}
            </button>

            <div className={styles.hint}>
              <ul>
                <span>Controls:</span>
                <li>🡅 - key up</li>
                <li>🡇 - key down</li>
                <li>🡄 - key left</li>
                <li>🡆 - key right</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
