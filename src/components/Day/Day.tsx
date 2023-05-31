import { useState } from "react";
import styles from "./Day.module.scss";
import DayModal from "../DayModal/DayModal";

export const Day = ({ dayNum }: any) => {
    const [openModal, setopenModal] = useState(false);
    const openModalView = () => {
        setopenModal(true);
    };
    const closeModalView = () => {
        setopenModal(false);
    };

    if (dayNum === 0) {
        return (
            <div className={styles.card}>
                <p></p>
            </div>
        );
    }

    return (
        <>
            <div className={styles.card} onClick={openModalView}>
                {dayNum}
            </div>
            {openModal ? <DayModal onChange={closeModalView} /> : <></>}
        </>
    );
};
