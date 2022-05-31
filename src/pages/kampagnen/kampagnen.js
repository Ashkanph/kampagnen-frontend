import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import theme from "../../components/common/layouts/theme";
import KampagnenList from "../../components/kampagnen/kampagnenList";
import KampagnenFilter from "../../components/kampagnen/kampagnenFilter";
import KampagneErstellen from "../../components/kampagnen/kampagneErstellen";
import { mockList } from "../../helpers/mockData";

const STATUSES = {
    booked: "Gebukht",
    created: "Erstellt",
    archived: "Archiviert",
};

const Kampagnen = props => {
    const [filteredStatuses, setFilteredStatuses] = useState([]);
    const [kampagnenData, setKampagnenData] = useState([]);
    const matches525 = useMediaQuery("(max-width: 525px)");
    const matches475 = useMediaQuery("(max-width: 475px)");

    useEffect(() => {
        const lsData = localStorage.getItem("kampagnenData");
        if (!lsData) {
            localStorage.setItem("kampagnenData", JSON.stringify(mockList));
            setKampagnenData(mockList);
        } else {
            setKampagnenData(JSON.parse(lsData));
        }
    }, []);

    return (
        <Box
            sx={{
                mt: `40px`,
                p: matches475 ? 0 : "32px 32px 45px",
                height: `calc(100vh - 136px)`,
                backgroundColor: theme.palette.primary.contrastText,
                color: theme.palette.secondary.contrastText,
                borderRadius: "2px",
                boxShadow: matches475
                    ? "none"
                    : `0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)`,
            }}
        >
            <Box sx={{ display: "flex", flexDirection: matches525 ? "column" : "row" }}>
                <Typography
                    className="letter-spacing-86"
                    fontSize="24px"
                    fontWeight="bold"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    Alle Kampagnen
                </Typography>
                <KampagneErstellen setKampagnenData={setKampagnenData} />
            </Box>
            <KampagnenFilter
                statuses={STATUSES}
                filteredStatuses={filteredStatuses}
                setFilteredStatuses={setFilteredStatuses}
            />
            <KampagnenList
                theme={props.theme}
                data={kampagnenData}
                statuses={STATUSES}
                filteredStatuses={filteredStatuses}
            />
        </Box>
    );
};

export default Kampagnen;
