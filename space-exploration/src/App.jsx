import { CssBaseline, useMediaQuery } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { defaultTheme } from "./helpers/theme";
import Home from "./Pages/Home";

export default function App() {
  const location = useLocation();
  const theme = createTheme(defaultTheme);
  console.log(location);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
