import { TextField, Button, Box } from "@mui/material";

const Input = ({
  inputValue,
  handleSubmit,
  handleChange,
  gameEnded,
  playAgain,
  isError,
}) => {
  return (
    <Box
      sx={{
        mt: 2,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!gameEnded ? (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "15px" }}>
          <TextField
            variant="outlined"
            placeholder="?"
            value={inputValue}
            onChange={handleChange}
            error={isError}
            autoComplete="off"
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#00f3ff",
                fontSize: "2rem",
                textAlign: "center",
                "& fieldset": { borderColor: isError ? "#ff0000" : "#00f3ff" },
                "&:hover fieldset": { borderColor: "#fff" },
                "&.Mui-focused fieldset": {
                  borderColor: "#00f3ff",
                  boxShadow: "0 0 10px #00f3ff",
                },
              },
              "& input": { textAlign: "center", width: "60px" }, // Center text inside input
            }}
            autoFocus
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              bgcolor: "#00f3ff",
              color: "#000",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#fff", boxShadow: "0 0 15px #fff" },
            }}
          >
            GUESS
          </Button>
        </form>
      ) : (
        <Button
          variant="contained"
          onClick={playAgain}
          sx={{
            bgcolor: "#ff00ff",
            fontSize: "1.2rem",
            px: 4,
            py: 1,
            boxShadow: "0 0 20px #ff00ff",
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          PLAY AGAIN
        </Button>
      )}
    </Box>
  );
};

export default Input;
