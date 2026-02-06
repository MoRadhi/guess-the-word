const WordDisplay = ({ currWord, guessedLetters, gameEnded }) => {
  const generateWordDisplay = () => {
    const wordDisplay = [];
    if (!gameEnded) {
      // for...of is a string and array iterator that does not use index
      console.log(currWord);
      currWord.split("").map((letter) => {
        guessedLetters.includes(letter)
          ? wordDisplay.push(letter)
          : wordDisplay.push("_");
      });
      return currWord
        .split("")
        .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
    }
    return currWord
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };
  return (
    <div>
      <h3>Word Display</h3>
      {generateWordDisplay()}
    </div>
  );
};

export default WordDisplay;
