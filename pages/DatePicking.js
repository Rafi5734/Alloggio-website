import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from "react-day-picker/moment";

import "moment/locale/it";
import Select from "react-select";
import { Button, Container } from "react-bootstrap";
import RoomSelect from "./RoomSelect";

const DatePicking = () => {
    const rooms = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
        { value: 6, label: "6" },
    ];
    const guests = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
        { value: 6, label: "6" },
    ];
    return (
        <Container
            style={{
                padding: "50px",
                backgroundColor: "#faf9f5",
                zIndex: "99",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                }}
            >
                <div style={{ marginLeft: "100px" }}>
                    <p style={{ letterSpacing: "3px" }}>CHECK-IN </p>
                    <DayPickerInput
                        formatDate={formatDate}
                        parseDate={parseDate}
                        placeholder={`${formatDate(new Date())}`}
                    />
                </div>
                <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                    <p style={{ letterSpacing: "3px" }}>CHECK-OUT </p>
                    <DayPickerInput
                        formatDate={formatDate}
                        parseDate={parseDate}
                        placeholder={`${formatDate(new Date())}`}
                    />
                </div>
                <div style={{ marginRight: "30px" }}>
                    <p style={{ letterSpacing: "3px" }}>ROOMS</p>
                    <Select options={rooms} />
                </div>
                <div style={{ marginRight: "30px" }}>
                    <p style={{ letterSpacing: "3px" }}>GUESTS:</p>
                    <Select
                        // defaultValue={[colourOptions[2], colourOptions[3]]}
                        isMulti
                        name="colors"
                        options={guests}
                        className="basic-multi-select"
                        classNamePrefix="select Your Guests"
                    />
                </div>
                <div style={{ marginTop: "40px" }}>
                    <Button
                        variant="outline-danger"
                        style={{ letterSpacing: "3px" }}
                    >
                        BOOK NOW
                    </Button>{" "}
                </div>
            </div>
        </Container>
    );
};

export default DatePicking;
