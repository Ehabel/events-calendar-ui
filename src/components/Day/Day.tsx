import styles from "./Day.module.scss";

export const Day = ({ dayNum }: any) => {
    if (dayNum === 0) {
        return (
            <div className={styles.card}>
                <p></p>
            </div>
        );
    }

    return <div className={styles.card}>{dayNum}</div>;
};
