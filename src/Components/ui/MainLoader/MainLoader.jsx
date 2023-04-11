import { Box, CircularProgress } from "@mui/material";

const MainLoader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default MainLoader;
