import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import Home from "./pages/home";
import theme from "./components/common/layouts/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}

export default App;
