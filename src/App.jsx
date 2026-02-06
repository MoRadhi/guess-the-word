import "./App.css";
import { getRandomWord } from "./utils";
import { useEffect, useState } from "react";
import Input from "./Components/Input";
import GuessedLetters from "./Components/GuessedLetters";
import WordDisplay from "./Components/WordDisplay";
import Scoreboard from "./Components/Scoreboard";

function App() {
  // currWord is the current secret word for this round. Update this with the updater function after each round.
  const [currWord, setCurrentWord] = useState(getRandomWord());
  // guessedLetters stores all letters a user has guessed so far
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [gameEnded, setGameEnded] = useState(false);
  const [guessTries, setGuessTries] = useState(currWord.length + 5);
  const [gameState, setGameState] = useState("");
  const [wins, setWins] = useState(0);
  const [round, setRound] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return; // Don't allow empty submissions

    if (guessedLetters.includes(inputValue)) {
      setGameState("Letter already guessed");
      return;
    } else {
      setGuessedLetters((prev) => [...prev, inputValue]);
    }

    //consider placing in useEffect hook
    if (currWord.includes(inputValue)) {
      setGameState("Correct Letter Guessed");
    } else {
      setGameState("Wrong Letter Guessed");
      setGuessTries((prev) => prev - 1);
    }

    setInputValue("");
  };

  //Check that the length of the input is 1, if not reject
  const handleChange = (event) => {
    const value = event.target.value;
    const letterRegex = /^[a-z]*$/;

    if (gameEnded) return; // Don't allow guesses if the game is over!

    //Check if the input is too long
    if (value.length > 1) {
      setGameState("Input 1 letter at a time");
      return;
    }

    //Check if the input is actually a letter (or empty, for deleting)
    if (letterRegex.test(value)) {
      setInputValue(value);
      setGameState("");
    } else {
      setGameState("Input a valid letter (a-z)"); // It's a number or symbol!
    }
  };

  // Effect to check for WIN
  useEffect(() => {
    const isWin = currWord
      .split("")
      .every((letter) => guessedLetters.includes(letter));

    if (isWin && guessedLetters.length > 0) {
      setGameEnded(true);
      setGameState(`Congrats, you guessed the word ${currWord}`);
      setWins((prev) => prev + 1);
    }
  }, [guessedLetters, currWord]);

  // Effect to check for LOSS
  useEffect(() => {
    if (guessTries <= 0) {
      setGameEnded(true);
      setGameState(`Game Over! The word was ${currWord}`);
    }
  }, [guessTries, currWord]);

  //Reset
  const playAgain = () => {
    const newWord = getRandomWord();
    setCurrentWord(newWord);
    setGuessedLetters([]);
    setInputValue("");
    setGameEnded(false);
    setGuessTries(newWord.length + 5);
    setGameState("");
    setRound((prev) => prev + 1);
  };

  return (
    <>
      <div className="card">
        <h1>Guess The Word 🚀</h1>

        <WordDisplay
          currWord={currWord}
          guessedLetters={guessedLetters}
          gameEnded={gameEnded}
        />

        <p>Tries remaining: {guessTries}</p>

        <h3>Game State</h3>
        {gameState}

        <GuessedLetters guessedLetters={guessedLetters} />
        <br />
        <h3>Input</h3>
        <Input
          inputValue={inputValue.toLowerCase()}
          gameEnded={gameEnded}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          playAgain={playAgain}
        />

        <Scoreboard round={round} wins={wins} />
      </div>
    </>
  );
}

export default App;
