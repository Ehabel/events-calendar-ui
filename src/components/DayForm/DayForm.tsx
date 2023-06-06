import { useState } from "react";
import { addNewEvent } from "../../services/services";
import styles from "./DayForm.module.scss";
import { validateDates } from "../../services/helper";

export const DayForm = () => {
    const initialState = {
        eventName: "",
        startDate: "",
        endDate: "",
        label: "",
        location: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState({ isPresent: false, message: "" });

    const formChange = (e: any) => {
        const { value, id } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const onSubmit = async () => {
        try {
            validateDates(formData.startDate, formData.endDate);
            setError({ isPresent: false, message: "" });
            addNewEvent(formData);
        } catch (e: any) {
            setError({ isPresent: true, message: e.message });
        }
    };
    return (
        <div>
            <form className={styles.form} onSubmit={onSubmit}>
                <label htmlFor="eventName">Event name:</label>
                <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    onChange={formChange}
                    required
                />
                <label htmlFor="startDate">Start date:</label>
                <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={formChange}
                    required
                />
                <label htmlFor="endDate">End date:</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={formChange}
                    required
                />
                <label htmlFor="label">Event label:</label>
                <input
                    type="text"
                    id="label"
                    name="label"
                    onChange={formChange}
                    required
                />
                <label htmlFor="location">Event location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    onChange={formChange}
                    required
                />
                <button className={styles.form__btn} type="submit">
                    Submit
                </button>
            </form>
            {error.isPresent && <p className={styles.error}>{error.message}</p>}
        </div>
    );
};
