import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/globals";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ProductsProvider } from "./contexts/ProductsContext";
import { OrderProvider } from "./contexts/OrderContext";

export function App() {

  return (
    <BrowserRouter>
      <ProductsProvider>
        <OrderProvider>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
              <Router />
          </ThemeProvider>
        </OrderProvider>
      </ProductsProvider>
    </BrowserRouter>
  )
}
