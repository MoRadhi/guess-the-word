import { Box, Paper, Typography } from "@mui/material";

const WordDisplay = ({ currWord, guessedLetters, gameEnded }) => {
  //I don't even need generateWordDisplay() function anymore
  //since I can just calculate the string right in the return statement
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1.5,
        my: 4,
        flexWrap: "wrap",
      }}
    >
      {currWord.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter);
        const showLetter = isGuessed || gameEnded;

        return (
          <Paper
            key={index}
            elevation={6}
            sx={{
              width: 60,
              height: 70,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: showLetter ? "rgba(0, 243, 255, 0.1)" : "#1a1a1a",
              borderBottom: "4px solid",
              borderColor: showLetter ? "#00f3ff" : "#333",
              color: "#fff",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                color: showLetter ? "#00f3ff" : "transparent",
                textShadow: "0 0 10px #00f3ff",
              }}
            >
              {showLetter ? letter.toUpperCase() : ""}
            </Typography>
          </Paper>
        );
      })}
    </Box>
  );
};

export default WordDisplay;
