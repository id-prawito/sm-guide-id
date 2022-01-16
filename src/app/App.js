import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import GlobalStyles from "../config/GlobalStyles";
import ThemeContext from "../config/ThemeContext";
import RouteSite from "../config/RouteSite";

import "./app.scss";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <BrowserRouter>
            <ThemeProvider theme={{ theme }}>
                <GlobalStyles />
                <RouteSite />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
