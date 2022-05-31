import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00bef7",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#fafafa",
            light: "#ffffff",
            contrastText: "#444444",
            tableCellBorder: "#ebebeb",
            tableBorder: "#d8d8d8",
            tableHeaderBG: "#f4f6f8",
            filterLabel: "#7c7c7c",
            selectedItemBG: "#e7f9fe",
        },
    },
});

export default theme;
