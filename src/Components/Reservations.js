import React, { useEffect } from "react";

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
        if (form.name && form.guests && form.date && form.time && form.phone) {
            return false;
        } else {
            return true;
        }
    };

    return (
        <>
            <h1>Hi</h1>
        </>
    )
}

export default Reservations;