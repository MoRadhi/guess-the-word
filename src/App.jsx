import { useEffect, useState } from "react";
import { getRandomWord } from "./utils";
import { fetchWordImage } from "./utils";
import Input from "./Components/Input";
import GuessedLetters from "./Components/GuessedLetters";
import WordDisplay from "./Components/WordDisplay";
import Scoreboard from "./Components/Scoreboard";
import { Container, Typography, Box } from "@mui/material";
import "./App.css";

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
  const [wordImage, setWordImage] = useState("");
  const [isError, setIsError] = useState(false); // Controls the shake animation

  // Fetch image when word changes using newly learned async await
  useEffect(() => {
    const getImage = async () => {
      const url = await fetchWordImage(currWord);
      setWordImage(url);
    };
    getImage();
  }, [currWord]);

  //Function is used to handle wrong game states and shake animation
  const triggerError = (message) => {
    setGameState(message);
    setIsError(true);
    //Remove the error class after animation finishes
    setTimeout(() => setIsError(false), 300);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return; // Don't allow empty submissions

    if (guessedLetters.includes(inputValue)) {
      triggerError("Letter already guessed!");
      return;
    } else {
      setGuessedLetters((prev) => [...prev, inputValue]);
    }

    if (currWord.includes(inputValue)) {
      setGameState("Correct! 🎉");
    } else {
      triggerError("Wrong guess! ❌");
      setGuessTries((prev) => prev - 1);
    }

    setInputValue("");
  };

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    const letterRegex = /^[a-z]*$/;

    if (gameEnded) return; // Don't allow guesses if the game is over

    //Check if the input is too long
    if (value.length > 1) {
      triggerError("One letter at a time!");
      return;
    }

    //Check if the input is actually a letter (or empty, for deleting)
    if (letterRegex.test(value)) {
      setInputValue(value);
      setGameState("");
    } else {
      triggerError("Letters only (A-Z)"); // It's a number or symbol
    }
  };

  // Effect to check for WIN
  useEffect(() => {
    const isWin = currWord
      .split("")
      .every((letter) => guessedLetters.includes(letter));

    if (isWin && !gameEnded) {
      //instead of checking guessed letters length, check game ended status
      setGameEnded(true);
      setGameState(`🎉 YOU WON! The word was ${currWord.toUpperCase()}`);
      setWins((prev) => prev + 1);
    }
  }, [guessedLetters, currWord, gameEnded]); //Added game ended to dependencies

  // Effect to check for LOSS
  useEffect(() => {
    if (guessTries <= 0 && !gameEnded) {
      //Same thing here, check game ended status too
      setGameEnded(true);
      setGameState(`💀 Game Over! The word was ${currWord.toUpperCase()}`);
    }
  }, [guessTries, currWord, gameEnded]);

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
    setWordImage(""); //Clear the image
  };

  return (
    <Container maxWidth="sm">
      <Box className="neon-card">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#fff",
            letterSpacing: 3,
            textShadow: "0 0 10px #fff",
          }}
        >
          Guess The Word
        </Typography>

        {/* Image Display */}
        <Box className="image-container">
          {wordImage && (
            <img src={wordImage} alt="Clue" className="word-image" />
          )}
        </Box>

        <WordDisplay
          currWord={currWord}
          guessedLetters={guessedLetters}
          gameEnded={gameEnded}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ color: "#aaa" }}>
            Attempts Left:{" "}
            <span
              style={{
                color: guessTries < 3 ? "#ff003c" : "#fff",
                fontWeight: "bold",
                fontSize: "1.2em",
              }}
            >
              {guessTries}
            </span>
          </Typography>

          <Typography
            sx={{
              color: isError ? "#ff003c" : "#00f3ff",
              fontWeight: "bold",
              textShadow: "0 0 5px currentColor",
            }}
          >
            {gameState}
          </Typography>
        </Box>

        {/* Input wrapper handles the shake class */}
        <Box className={isError ? "shake" : ""}>
          <Input
            inputValue={inputValue}
            gameEnded={gameEnded}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            playAgain={playAgain}
            errorState={isError}
          />
        </Box>

        <GuessedLetters guessedLetters={guessedLetters} />

        <Scoreboard round={round} wins={wins} />
      </Box>
    </Container>
  );
}

export default App;
