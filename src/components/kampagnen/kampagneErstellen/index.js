import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useMediaQuery from "@mui/material/useMediaQuery";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import MyButton from "../../common/button";
import { formatDateTime } from "../../../helpers/date";

const formControlStyle = {
    flexDirection: "row",
    width: "100%",
    mb: "24px",
    alignItems: "center",
    justifyContent: "center",
};

const labelStyle = {
    width: "160px",
    mr: "40px",
    fontWeight: "bold",
    fontSize: "16px",
    letterSpacing: "0.57px",
    textAlign: "right",
};

const inputStyle = {
    width: "100%",
    maxWidth: "560px",
    height: "36px",
    fontSize: "14px",
    letterSpacing: "0.5px",
};

const menuItemStyle = {
    fontSize: "14px",
    letterSpacing: "0.5px",
};

const KampagneErstellen = props => {
    const { setKampagnenData } = props;

    const [open, setOpen] = React.useState(false);
    const [formEdited, setFormEdited] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setFormEdited(false);
        setNewCampaign({ status: "" });
    };
    const matches = useMediaQuery("(min-width:961px)");
    const matches640 = useMediaQuery("(max-width: 640px)");

    const [newCampaign, setNewCampaign] = React.useState({ status: "" });
    const theme = useTheme();

    const handleChange = event => {
        const newValue =
            event.target.name !== "startDate" && event.target.name !== "endDate"
                ? event.target.value.trim()
                : new Date(event.target.value).getTime();
        setNewCampaign(newCampaign => ({
            ...newCampaign,
            [event.target.name]: newValue,
        }));
    };

    const style = React.useMemo(
        () => ({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: matches ? 960 : "100vw",
            height: matches ? 562 : "100vh",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
        }),
        [matches]
    );

    const CustomDatepickerInput = React.forwardRef(
        ({ _value, onClick, startOrEnd }, ref) => (
            <OutlinedInput
                sx={{
                    ...inputStyle,
                    width: "134px",
                    color: theme.palette.secondary.filterLabel,
                }}
                onClick={onClick}
                inputRef={ref}
                value={formatDateTime(newCampaign[`${startOrEnd}Date`])}
                startAdornment={
                    <InputAdornment position="start">
                        <CalendarMonthIcon
                            sx={{ fill: theme.palette.secondary.filterLabel }}
                        />
                    </InputAdornment>
                }
            />
        )
    );

    const DatePickerComponent = ({ startOrEnd }) => {
        return (
            <DatePicker
                style={{ width: "134px" }}
                onChange={date =>
                    handleChange({
                        target: { name: `${startOrEnd}Date`, value: date },
                    })
                }
                customInput={<CustomDatepickerInput startOrEnd={startOrEnd} />}
            />
        );
    };

    const addNewCampaign = event => {
        event.preventDefault();
        setFormEdited(true);
        if (
            !newCampaign?.name ||
            !newCampaign?.name === "" ||
            !newCampaign?.customerName ||
            !newCampaign?.customerName === ""
        ) {
            return;
        }
        setKampagnenData(kampagnenData => {
            const newData = [
                ...kampagnenData,
                {
                    campaignName: newCampaign?.name,
                    customerName: newCampaign?.customerName,
                    startDate: newCampaign?.startDate,
                    endDate: newCampaign?.endDate,
                    status: newCampaign?.status,
                    csid: "csid_" + new Date().getTime(),
                },
            ];
            localStorage.setItem("kampagnenData", JSON.stringify(newData));
            return newData;
        });
        handleClose();
    };

    return (
        <>
            <MyButton onClick={handleOpen} label="Kampagne erstellen" />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    "*": {
                        color: theme.palette.secondary.contrastText,
                    },
                }}
            >
                <Box sx={style} component="form">
                    <Typography
                        id="modal-modal-title"
                        align="center"
                        fontWeight="bold"
                        fontSize="24px"
                        variant="h6"
                        component="h2"
                        borderBottom={`2px solid ${theme.palette.secondary.filterLabel}`}
                        m="-32px -32px 47px -32px"
                        p="24px 0"
                        height="80px"
                    >
                        Kampagne erstellen
                    </Typography>
                    <FormControl sx={formControlStyle}>
                        <Typography sx={labelStyle}>Kampagnenname*:</Typography>
                        <OutlinedInput
                            placeholder="Kampagnenname eingeben"
                            sx={inputStyle}
                            onChange={handleChange}
                            name="name"
                            error={
                                formEdited &&
                                (!newCampaign?.name || newCampaign?.name === "")
                            }
                        />
                    </FormControl>
                    <FormControl sx={formControlStyle}>
                        <Typography sx={labelStyle}>Kunde*:</Typography>
                        <OutlinedInput
                            placeholder="Kunde eingeben"
                            sx={inputStyle}
                            onChange={handleChange}
                            name="customerName"
                            error={
                                formEdited &&
                                (!newCampaign?.customerName ||
                                    newCampaign?.customerName === "")
                            }
                        />
                    </FormControl>
                    <Box sx={{ ...formControlStyle, display: "flex", maxHeight: "65px" }}>
                        <Typography sx={labelStyle}>Laufzeit:</Typography>
                        <Box
                            sx={{
                                ...inputStyle,
                                display: "flex",
                                alignItems: "center",
                                height: matches640 ? "65px" : "36px",
                                flexDirection: matches640 ? "column" : "row",
                                "& .react-datepicker-wrapper": {
                                    width: "134px",
                                    marginRight: "24px",
                                },
                            }}
                        >
                            <Typography sx={{ ...menuItemStyle, mr: "8px" }}>
                                Start*:
                            </Typography>
                            <DatePickerComponent startOrEnd="start" />
                            <Typography
                                sx={{
                                    ...menuItemStyle,
                                    mr: "8px",
                                    mt: matches640 ? "10px" : "0",
                                }}
                            >
                                Ende*:
                            </Typography>
                            <DatePickerComponent startOrEnd="end" />
                        </Box>
                    </Box>
                    <FormControl
                        sx={{ ...formControlStyle, mt: matches640 ? "50px" : "0" }}
                    >
                        <Typography sx={labelStyle}>Status:</Typography>
                        <Select
                            id="status-select"
                            onChange={handleChange}
                            name="status"
                            value={newCampaign.status}
                            sx={inputStyle}
                        >
                            <MenuItem value="created" sx={menuItemStyle}>
                                Erstellt
                            </MenuItem>
                            <MenuItem value="booked" sx={menuItemStyle}>
                                Gebucht
                            </MenuItem>
                            <MenuItem value="archived" sx={menuItemStyle}>
                                Archiviert
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={formControlStyle}>
                        <Typography sx={labelStyle}>Notiz:</Typography>
                        <textarea
                            style={{
                                ...inputStyle,
                                minHeight: "100px",
                                border: `1px solid ${theme.palette.secondary.tableBorder}`,
                                borderRadius: "4px",
                                padding: "16px 14px",
                            }}
                            onChange={handleChange}
                            name="customerName"
                        />
                    </FormControl>
                    <FormControl sx={{ ...formControlStyle }}>
                        <Typography sx={labelStyle}> </Typography>
                        <Box
                            sx={{
                                ...inputStyle,
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <MyButton
                                onClick={handleClose}
                                variant="outlined"
                                label="Abbrechen"
                                sx={{ marginRight: "16px" }}
                            />
                            <MyButton
                                onClick={addNewCampaign}
                                type="submit"
                                label="Erstellen"
                                sx={{ marginRight: "1px" }}
                            />
                        </Box>
                    </FormControl>
                </Box>
            </Modal>
        </>
    );
};

export default KampagneErstellen;
