import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header(_props) {
    const matches = useMediaQuery("(max-width: 400px)");

    return (
        <AppBar position="static" sx={{ zIndex: 4 }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: matches ? "10px" : "34px", mr: "16px" }}
                >
                    <MenuIcon sx={{ height: "24px", width: "24px" }} />
                </IconButton>
                <Typography
                    className="letter-spacing-86"
                    fontSize="24px"
                    fontWeight="bold"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Kampagnenmanager
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
