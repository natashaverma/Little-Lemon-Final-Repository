import React, { useEffect } from "react";
import "./Reservations.css";

function Reservations(props) {
    const { form, onChange, onSubmit } = props;

    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = (s * a) % m) / m;
        };
    };

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ":00");
            }
            if (random() < 0.5) {
                result.push(i + ":30");
            }
        }
        return result;
    };

    const submitAPI = function (formData) {
        return true;
    };

    const initializeTimes = () => {
        const availableTimes = fetchAPI(new Date(form.date));
        return availableTimes.map((time) => (
            <option key={time} defaultValue={time}>
                {time}
            </option>
        ));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (submitAPI(form)) return onSubmit(event);
    };

    const isDisabled = () => {
        if (form.name && form.guests && form.date && form.time) {
            return false;
        } else {
            return true;
        }
    };

    return (
        <>
            <div className="res-container">
                <h1 className="res-title">Reserve your Table</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Your Name</label>
                        <input
                            className="forminput"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div id="guests-input">
                        <label className="guests-title" htmlFor="guests">
                            How Many Guests?
                        </label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={form.guests} onChange={onChange} required />
                    </div>
                    <div id="date-time">
                        <div>
                            <label htmlFor="date">Date</label>
                            <input
                                name="date"
                                type="date"
                                value={form.date}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="time">Which Time?</label>
                            <select name="time" onChange={onChange}>
                                <option key="default" defaultValue="">
                                    Pick a time
                                </option>
                                {form.date !== "" ? (
                                    initializeTimes()
                                ) : (
                                    <option key="select-date-first" defaultValue="">
                                        Set date first
                                    </option>
                                )}
                            </select>
                        </div>
                    </div>
                    <button
                        aria-label="On Click"
                        data-testid="submitbutton"
                        disabled={isDisabled()}
                        id="submit"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}

export default Reservations;