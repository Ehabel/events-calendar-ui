import { useState } from "react";
import { Day } from "../../components/Day/Day";
import { getMonth } from "../../services/RetrieveMonth";
import styles from "./Month.module.scss";

const Month = () => {
    let getMonthName = getMonth();
    const [monthInt, setMonthInt] = useState(getMonthName.monthInt + 1);
    const [monthString, setMonthString] = useState(getMonthName.monthString);

    const onPrevMonth = () => {
        getMonthName = getMonth(2023, monthInt - 1);
        setMonthInt(monthInt - 1);
        setMonthString(getMonthName.monthString);
        console.log(getMonthName);
    };

    const onNextMonth = () => {
        getMonthName = getMonth(2023, monthInt + 1);
        setMonthInt(monthInt + 1);
        setMonthString(getMonthName.monthString);
        console.log(getMonthName);
    };

    return (
        <div>
            <button onClick={onPrevMonth}>Previous</button>
            <h1>{monthString}</h1>
            <button onClick={onNextMonth}>Next</button>
            <div className={styles.cal}>
                <Day />
            </div>
        </div>
    );
};

export default Month;
