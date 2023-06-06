import { useCountdown } from "./Countdown";
import DateTimeDisplay from "./DateTimeDisplay";
import styles from "./CountDown.module.scss";

export const CountdownTimer = ({ targetDate }: any) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

const ExpiredNotice = () => {
    return <span>Times up!!!</span>;
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
    return (
        <div className={styles.time}>
            <DateTimeDisplay value={days} type={"Days"} />
            <p className={styles.unit__para}>:</p>
            <DateTimeDisplay value={hours} type={"Hours"} />
            <p className={styles.unit__para}>:</p>
            <DateTimeDisplay value={minutes} type={"Mins"} />
            <p className={styles.unit__para}>:</p>
            <DateTimeDisplay value={seconds} type={"Seconds"} />
        </div>
    );
};
