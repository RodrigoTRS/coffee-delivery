import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/globals";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
          <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
