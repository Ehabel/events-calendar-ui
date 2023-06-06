import { useState } from "react";
import { Day } from "../../components/Day/Day";
import { getMonth } from "../../services/RetrieveMonth";
import styles from "./Month.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

const Month = ({ events }: any) => {
    let getMonthName = getMonth();
    const [monthInt, setMonthInt] = useState(getMonthName.monthInt + 1);
    const [monthString, setMonthString] = useState(getMonthName.monthString);
    const [year, setYear] = useState(getMonthName.currYear);
    const [blankDayArr, setBlankDayArr] = useState([
        ...Array(getMonthName.firstDayNum - 1).fill(-1),
    ]);
    const [dayArr, setDayArr] = useState([
        ...Array(getMonthName.daysInMonth).keys(),
    ]);
    const [combinedDays, setCombinedDays] = useState([
        ...blankDayArr,
        ...dayArr,
    ]);

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
        setYear(getMonthName.currYear);
        if (getMonthName.firstDayNum === 0) {
            setBlankDayArr([...Array(6).fill(-1)]);
            setCombinedDays([
                ...Array(6).fill(-1),
                ...Array(getMonthName.daysInMonth).keys(),
            ]);
        } else {
            setBlankDayArr([...Array(getMonthName.firstDayNum - 1).fill(-1)]);
            setCombinedDays([
                ...Array(getMonthName.firstDayNum - 1).fill(-1),
                ...Array(getMonthName.daysInMonth).keys(),
            ]);
        }

        setDayArr([...Array(getMonthName.daysInMonth).keys()]);
        for (let i = 0; i < Math.ceil(combinedDays.length / 7); i++) {}
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

    const getRows = () => {
        let rows: any = [];
        let cells: any = [];
        combinedDays.map((day, i) => {
            day = day + 1;
            if (i % 7 !== 0) {
                cells.push(day);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(day);
            }
            if (i === combinedDays.length - 1) {
                rows.push(cells);
            }
        });
        rows.map((row: any) => {
            if (row.length % 7 !== 0) {
                let newItems = [...Array(7 - (row.length % 7)).fill(0)];
                row.push(...newItems);
            }
        });
        return { rows, cells };
    };

    return (
        <div className={styles.cal}>
            <div className={styles.cal__header}>
                <button onClick={onPrevMonth} className={styles.btn}>
                    <FontAwesomeIcon
                        icon={faBackward}
                        style={{ color: "#000000" }}
                    />
                </button>
                <h1 className={styles.cal__header__text}>
                    {monthString} {year}
                </h1>
                <button onClick={onNextMonth} className={styles.btn}>
                    <FontAwesomeIcon
                        icon={faForward}
                        style={{ color: "#000000" }}
                    />
                </button>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.table__row__header}>
                        {daysOfWeek.map((day) => {
                            return (
                                <th className={styles.table__header} key={day}>
                                    {day}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {getRows().rows.map((d: any) => {
                        return (
                            <tr key={d}>
                                {d.map((dayNum: number, i: number) => {
                                    return (
                                        <td
                                            key={i + monthString + year}
                                            className={styles.table__data}
                                        >
                                            <Day
                                                key={i}
                                                dayNum={dayNum}
                                                events={events}
                                                currDate={
                                                    new Date(
                                                        year,
                                                        monthInt - 2,
                                                        dayNum + 1
                                                    )
                                                }
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Month;
