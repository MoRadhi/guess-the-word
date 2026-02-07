import { Box, Paper, Typography, Grid } from "@mui/material";

const Scoreboard = ({ round, wins }) => {
  return (
    <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid #333" }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Round Section */}
        <Grid>
          <Paper
            sx={{
              p: 2,
              bgcolor: "transparent",
              border: "1px solid #00f3ff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#00f3ff", letterSpacing: 1 }}
            >
              ROUND 🔄
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
              {round}
            </Typography>
          </Paper>
        </Grid>

        {/* Wins Section */}
        <Grid>
          <Paper
            sx={{
              p: 2,
              bgcolor: "transparent",
              border: "1px solid #d600ff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#d600ff", letterSpacing: 1 }}
            >
              WINS 🏆
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
              {wins}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Scoreboard;
