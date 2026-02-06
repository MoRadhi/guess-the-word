const GuessedLetters = ({ guessedLetters }) => {
  return (
    <div>
      <h3>Guessed Letters</h3>
      {guessedLetters.length > 0
        ? guessedLetters.toString()
        : "No Letters Guessed"}
    </div>
  );
};

export default GuessedLetters;
