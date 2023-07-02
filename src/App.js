import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/Navbar";
import { createTheme } from "@mui/material";
import SearchImage from "./components/SearchImage";

function App() {

  const theme = createTheme()


  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Navbar />
        <SearchImage />
      </div>
    </ThemeProvider>
  );
}

export default App;
