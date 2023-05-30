import { useState } from "react";
import { Day } from "../../components/Day/Day";
import { getMonth } from "../../services/RetrieveMonth";
import styles from "./Month.module.scss";

const Month = () => {
    let getMonthName = getMonth();
    const [monthInt, setMonthInt] = useState(getMonthName.monthInt + 1);
    const [monthString, setMonthString] = useState(getMonthName.monthString);
    const [year, setYear] = useState(getMonthName.currYear);

    const onPrevMonth = () => {
        getMonthName = getMonth(getMonthName.currYear, monthInt - 1);
        setMonthInt(monthInt - 1);
        setMonthString(getMonthName.monthString);
        setYear(getMonthName.currYear);
    };

    const onNextMonth = () => {
        getMonthName = getMonth(getMonthName.currYear, monthInt + 1);
        setMonthInt(monthInt + 1);
        setMonthString(getMonthName.monthString);
        setYear(getMonthName.currYear);
    };

    return (
        <div>
            <button onClick={onPrevMonth}>Previous</button>
            <h1>
                {monthString} {year}
            </h1>
            <button onClick={onNextMonth}>Next</button>
            <div className={styles.cal}>
                <Day />
            </div>
        </div>
    );
};

export default Month;
