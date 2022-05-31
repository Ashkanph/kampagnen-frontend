import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Pages from "./pages/";
import theme from "./components/common/layouts/theme";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Pages />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
