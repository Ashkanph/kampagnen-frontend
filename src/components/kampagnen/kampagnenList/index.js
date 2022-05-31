import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useMediaQuery from "@mui/material/useMediaQuery";

import { formatDateTime } from "../../../helpers/date";
import theme from "../../common/layouts/theme";
import SortIcon from "../../icons/sortIcon";

const KampagnenList = props => {
    const { data, statuses, filteredStatuses } = props;
    const matches = useMediaQuery("(max-width: 646px)");

    const tableCellsStyles = {
        fontSize: "16px !important",
        letterSpacing: "0.57",
        height: "60px",
        p: `0 0 0 ${matches ? "10px" : "23.5px"}`,
        color: theme.palette.secondary.contrastText,
    };

    const headerCellsStyles = {
        ...tableCellsStyles,
        fontWeight: "bold",
        height: "60px",
        backgroundColor: theme.palette.secondary.tableHeaderBG,
        p: "0 0 0 23.5px",
        color: theme.palette.secondary.contrastText,
    };

    const cellsStyles = minWidth => ({
        ...tableCellsStyles,
        minWidth,
    });

    return (
        <TableContainer
            sx={{
                height: `calc(100vh - 331px)`,
                overflowY: "scroll",
                border: `1px solid ${theme.palette.secondary.tableBorder}`,
            }}
        >
            <Table stickyHeader={true} sx={{ minWidth: 650 }} aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={headerCellsStyles}>
                            CS-ID
                            <SortIcon />
                        </TableCell>
                        <TableCell sx={headerCellsStyles}>
                            Kunde
                            <SortIcon />
                        </TableCell>
                        <TableCell sx={headerCellsStyles}>
                            Kampagnenname
                            <SortIcon />
                        </TableCell>
                        <TableCell sx={headerCellsStyles}>
                            Start
                            <SortIcon />
                        </TableCell>
                        <TableCell sx={headerCellsStyles}>
                            Ende
                            <SortIcon />
                        </TableCell>
                        <TableCell sx={headerCellsStyles}>
                            Status
                            <SortIcon />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(
                        row =>
                            (filteredStatuses.length === 0 ||
                                filteredStatuses.find(item => item === row.status)) && (
                                <TableRow
                                    key={row.csid}
                                    sx={{
                                        td: {
                                            borderLeft: `1px solid ${theme.palette.secondary.tableCellBorder}`,
                                            borderBottom: `1px solid ${theme.palette.secondary.tableCellBorder}`,
                                        },
                                    }}
                                >
                                    <TableCell sx={cellsStyles("178px")}>
                                        {row.csid}
                                    </TableCell>
                                    <TableCell sx={cellsStyles("0")}>
                                        {row.customerName}
                                    </TableCell>
                                    <TableCell sx={cellsStyles("188px")}>
                                        {row.campaignName}
                                    </TableCell>
                                    <TableCell sx={cellsStyles("107px")}>
                                        {formatDateTime(row.startDate)}
                                    </TableCell>
                                    <TableCell sx={cellsStyles("107px")}>
                                        {formatDateTime(row.endDate)}
                                    </TableCell>
                                    <TableCell
                                        className="text-capitalize"
                                        sx={cellsStyles("107px")}
                                    >
                                        {statuses[row.status]}
                                    </TableCell>
                                </TableRow>
                            )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default KampagnenList;
