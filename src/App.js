import { Feed } from "./components/Feed";
import { Sidebar } from "./components/Sidebar";
import { Rightbar } from "./components/Rightbar";
import { Box, createTheme  } from "@mui/material";

import Stack from '@mui/material/Stack';
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent={"space-evenly"}>
      <Sidebar  setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
