import React from "react";

import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function SortIcon() {
    const theme = useTheme();

    return (
        <Button
            sx={{
                width: "24px",
                minWidth: "0",
                marginLeft: "4px",
                marginBottom: "4px",
            }}
        >
            <Box
                sx={{
                    "&:before, &:after": {
                        border: "6px solid transparent",
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        content: "''",
                        display: "block",
                        height: "0%",
                        width: "0%",
                    },
                    "&:before": {
                        borderBottomColor: theme.palette.primary.main,
                    },
                    "&:after": {
                        borderTopColor: theme.palette.primary.main,
                        marginTop: "2px",
                    },
                }}
            ></Box>
        </Button>
    );
}
