const Input = ({
  inputValue,
  handleSubmit,
  handleChange,
  gameEnded,
  playAgain,
}) => {
  return (
    <div>
      {!gameEnded ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Letter"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="submit">Submit Letter</button>
        </form>
      ) : (
        /* If game ends only show play again button*/
        <button onClick={playAgain} className="play-again-btn">
          Play Again
        </button>
      )}
    </div>
  );
};

export default Input;
