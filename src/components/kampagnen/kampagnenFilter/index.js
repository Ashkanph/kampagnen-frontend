import * as React from "react";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import useMediaQuery from "@mui/material/useMediaQuery";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const chipStyle = palette => ({
    backgroundColor: palette.secondary.selectedItemBG,
    margin: "0 8px 0 0",
    padding: "6px 0",
    borderRadius: "2px",
    height: "24px",
    fontSize: "14px",
    zIndex: "100",
    "& .MuiSvgIcon-root": {
        fill: palette.primary.main,
        width: "18px",
    },
});

function getDropdownMenuStyles(name, filteredStatuses, theme) {
    return {
        fontSize: "14px",
        textTransform: "capitalize",
        fontWeight:
            filteredStatuses.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const MobileAccordion = ({ filteredStatuses, children }) => {
    const theme = useTheme();
    const matches = useMediaQuery("(max-width: 646px)");

    const FilterTitle = _ => (
        <Typography
            sx={{
                letterSpacing: "0.5px",
                color: theme.palette.secondary.filterLabel,
                fontSize: "14px",
            }}
            component="span"
        >
            Status filtern:
            {matches &&
                (filteredStatuses.length > 0 ? (
                    <FilterAltIcon
                        fontSize="medium"
                        sx={{ fill: theme.palette.primary.main, marginBottom: "-5px" }}
                    />
                ) : (
                    <FilterAltOffIcon fontSize="medium" sx={{ marginBottom: "-5px" }} />
                ))}
        </Typography>
    );

    return matches ? (
        <Accordion sx={{ width: "100%" }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <FilterTitle />
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    ) : (
        <>
            <FilterTitle />
            {children}
        </>
    );
};

const KampagnenFilter = props => {
    const { statuses, filteredStatuses, setFilteredStatuses } = props;
    const theme = useTheme();
    const matches = useMediaQuery("(max-width: 646px)");

    const handleChange = event => {
        const {
            target: { value },
        } = event;
        setFilteredStatuses(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    const handleSelectedDelete = value => {
        const newArray = filteredStatuses.filter(function (val, _index, _arr) {
            return val !== value;
        });
        setFilteredStatuses([...newArray]);
    };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.secondary.tableHeaderBG,
                maxHeight: matches ? "250px" : "60px",
                mt: "24px",
                border: `1px solid ${theme.palette.secondary.tableBorder}`,
                borderBottom: 0,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: matches ? "column" : "row",
            }}
        >
            <MobileAccordion filteredStatuses={filteredStatuses}>
                <FormControl
                    sx={{
                        m: 1,
                        height: matches ? "125px" : 36,
                        width: matches ? "100%" : 438,
                    }}
                >
                    <Select
                        id="select-filter"
                        multiple
                        value={filteredStatuses}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "Without label" }}
                        sx={{
                            height: matches ? "125px" : "36px",
                            backgroundColor: theme.palette.primary.contrastText,
                        }}
                        renderValue={selected => (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                {selected.map(value => (
                                    <Chip
                                        key={value}
                                        label={statuses[value]}
                                        sx={chipStyle(theme.palette)}
                                        onDelete={_ => handleSelectedDelete(value)}
                                        onMouseDown={event => {
                                            event.stopPropagation();
                                        }}
                                        deleteIcon={<ClearIcon />}
                                    />
                                ))}
                                {selected.length > 0 && (
                                    <Chip
                                        key="selected-filter-count"
                                        label={selected.length}
                                        sx={{
                                            ...chipStyle(theme.palette),
                                            fontWeight: "bold",
                                            marginLeft: matches ? "0" : "auto",
                                            marginRight: "0",
                                            "& .MuiChip-label": {
                                                backgroundColor:
                                                    theme.palette.primary.main,
                                                color: theme.palette.primary.contrastText,
                                                width: "24px",
                                                height: "24px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "2px",
                                                marginRight: "10px",
                                            },
                                        }}
                                        onDelete={_ => setFilteredStatuses([])}
                                        onMouseDown={event => {
                                            event.stopPropagation();
                                        }}
                                        deleteIcon={<ClearIcon />}
                                    />
                                )}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {Object.keys(statuses).map(name => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getDropdownMenuStyles(
                                    name,
                                    filteredStatuses,
                                    theme
                                )}
                            >
                                {statuses[name]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </MobileAccordion>
        </Box>
    );
};

export default KampagnenFilter;
