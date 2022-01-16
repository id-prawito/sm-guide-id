import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import GlobalStyles from "../config/GlobalStyles";
import ThemeContext from "../config/ThemeContext";
import "./app.scss";
import RouteSite from "../config/RouteSite";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <BrowserRouter basename="sm-guide-id">
            <ThemeProvider theme={{ theme }}>
                <GlobalStyles />
                <RouteSite />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
