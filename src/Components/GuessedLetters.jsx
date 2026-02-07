import { Box, Typography, Chip } from "@mui/material";

const GuessedLetters = ({ guessedLetters }) => {
  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Typography
        variant="h6"
        sx={{
          color: "#aaa",
          mb: 1,
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        Guessed Letters
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
        }}
      >
        {guessedLetters.length > 0 ? (
          guessedLetters.map((letter, index) => (
            <Chip
              key={index}
              label={letter.toUpperCase()}
              variant="outlined"
              sx={{
                color: "#ff00ff",
                borderColor: "#ff00ff",
                fontWeight: "bold",
                fontSize: "1.2rem",
                boxShadow: "0 0 5px rgba(255, 0, 255, 0.5)",
              }}
            />
          ))
        ) : (
          <Typography
            variant="body2"
            sx={{ color: "#555", fontStyle: "italic" }}
          >
            No letters guessed yet...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default GuessedLetters;
