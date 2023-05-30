import { useState } from "react";
import { Day } from "../../components/Day/Day";
import { getMonth } from "../../services/RetrieveMonth";
import styles from "./Month.module.scss";

const Month = () => {
    let getMonthName = getMonth();
    const [monthInt, setMonthInt] = useState(getMonthName.monthInt + 1);
    const [monthString, setMonthString] = useState(getMonthName.monthString);
    const [year, setYear] = useState(getMonthName.currYear);
    const [days, setDays] = useState(getMonthName.daysInMonth);
    const [firstDay, setfirstDay] = useState(getMonthName.firstDayString);

    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const setters = () => {
        setMonthString(getMonthName.monthString);
        setDays(getMonthName.daysInMonth);
        setYear(getMonthName.currYear);
        setfirstDay(getMonthName.firstDayString);
    };

    const onPrevMonth = () => {
        getMonthName = getMonth(getMonthName.currYear, monthInt - 1);
        setMonthInt(monthInt - 1);
        setters();
    };

    const onNextMonth = () => {
        getMonthName = getMonth(getMonthName.currYear, monthInt + 1);
        setMonthInt(monthInt + 1);
        setters();
    };

    return (
        <div>
            <button onClick={onPrevMonth}>Previous</button>
            <h1>
                {monthString} {year}
            </h1>
            <p>{firstDay}</p>
            <button onClick={onNextMonth}>Next</button>
            <table>
                <thead>
                    <tr>
                        {daysOfWeek.map((day) => {
                            return (
                                <th key={day} className={styles.table__header}>
                                    {day}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
            </table>
            <div className={styles.cal}>
                {[...Array(days).fill(0)].map((_, i) => (
                    <Day key={i} dayNum={i + 1} />
                ))}
            </div>
        </div>
    );
};

export default Month;
