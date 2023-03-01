import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
  main: "#fff",
};
const SECONDARY = {
  main: "#57C4C6",
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      mode: "dark",
      primary: PRIMARY,
      secondary: SECONDARY,
      background: {
        default: "black",
        paper: "black",
      },
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
