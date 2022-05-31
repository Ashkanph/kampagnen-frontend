import React from "react";

import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";

import Header from "../header";
import theme from "./theme";

export default function Layout(props) {
    const { children } = props;
    const matches475 = useMediaQuery("(max-width: 475px)");

    return (
        <Container
            maxWidth="100vw"
            sx={{
                backgroundColor: theme.palette.secondary.main,
                padding: "0 !important",
                width: "100vw",
                height: "100vh",
            }}
        >
            <Header />
            <Container
                maxWidth="100vw"
                sx={{ zIndex: 2, p: matches475 ? "0 15px" : "0 32px" }}
            >
                {children}
            </Container>
        </Container>
    );
}
