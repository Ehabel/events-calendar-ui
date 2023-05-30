import styles from "./Day.module.scss";

export const Day = ({ dayNum }: any) => {
    return <div className={styles.card}>{dayNum}</div>;
};
