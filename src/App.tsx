import { useEffect, useMemo, useState } from "react";
import { Button } from "./components/Button.tsx";
import { Card } from "./components/Card";
import { randomCharacterGenerator } from "./utils/random-character-generator.ts";
import { useProgress } from "./hooks/useProgress.tsx";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [interval, setInterval] = useState<NodeJS.Timeout | null>(null);

  const { progress, startProgress, stopProgress, updateProgress } =
    useProgress();

  const randomCharacter = useMemo(() => randomCharacterGenerator(), []);

  const playGame = (event: KeyboardEvent) => {
    if (!start) return;

    const keyPressed = event.key.toUpperCase();
    const currentChar = randomCharacter[currentIndex];

    const isGameOver = keyPressed !== currentChar;

    if (isGameOver || progress === 0) {
      resetGame();
      return;
    }

    if (keyPressed === currentChar) {
      if (currentIndex >= randomCharacter.length - 1) {
        resetGame();
      } else {
        setCurrentIndex((prevState) => prevState + 1);
      }
    } else {
      resetGame();
    }
  };

  const resetGame = () => {
    if (interval) {
      clearInterval(interval);
    }
    setStart(false);
    setGameOver(true);
    setCurrentIndex(0);
    updateProgress(100);
  };

  const startGame = () => {
    setStart(true);
    setGameOver(false);
    updateProgress(100);
    const intervalID = startProgress();
    setInterval(intervalID);
  };

  useEffect(() => {
    if (progress === 0 && start) {
      resetGame();
    }
  }, [progress, start]);

  useEffect(() => {
    window.addEventListener("keydown", playGame);

    return () => {
      window.removeEventListener("keydown", playGame);
    };
  }, [currentIndex, start]);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="w-[400px] h-fit bg-blue-950 rounded-3xl p-10 flex flex-col justify-center">
        <h1 className="text-white font-bold text-2xl text-center mb-2">
          MINI-GAME
        </h1>

        {gameOver ? (
          <Button onClick={startGame}>TENTE NOVAMENTE</Button>
        ) : !start ? (
          <Button onClick={startGame}>INICIAR JOGO</Button>
        ) : (
          <Card character={randomCharacter} activeIndex={currentIndex} />
        )}
      </div>
    </div>
  );
}
