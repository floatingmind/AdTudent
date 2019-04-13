import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
// Styled-Components
import { ThemeProvider } from "styled-components";

// MUI Themes
import RTL from "./theme/RTL";
import theme from "./theme/MuiTheme";

// Styled-components global style
import GlobalStyle from "./theme/StyledTheme";

// Redux Store
import store from "./store/configureStore";

import App from "./components/app";

ReactDOM.render(
  <Provider store={store}>
    <RTL>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={{}}>
          <React.Fragment>
            <GlobalStyle />
            <App />
          </React.Fragment>
        </ThemeProvider>
      </MuiThemeProvider>
    </RTL>
  </Provider>,
  document.getElementById("root")
);
