import styles from "./CountDown.module.scss";

const DateTimeDisplay = ({ value, type }: any) => {
    return (
        <div className={styles.unit}>
            <p className={styles.unit__para}>{value}</p>
            <p className={styles.unit__para}>{type}</p>
        </div>
    );
};

export default DateTimeDisplay;
