import React from "react";

import Button from "@mui/material/Button";

import theme from "../layouts/theme";

export default function CustomButton({ className, ...otherProps }) {
    const { onClick, label, variant, sx, type } = otherProps;
    const newSx = sx ? sx : {};
    const outlinedSx =
        variant === "outlined"
            ? {
                  color: theme.palette.primary.main,
                  backgroundColor: theme.palette.primary.contrastText,
              }
            : {};

    return (
        <Button
            onClick={onClick ?? null}
            variant="contained"
            sx={{
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "0.5px",
                ...outlinedSx,
                ...newSx,
            }}
            type={type}
        >
            {label}
        </Button>
    );
}
