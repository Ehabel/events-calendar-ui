import { useState } from "react";
import styles from "./EventCard.module.scss";
import EventModal from "../EventModal/EventModal";

export const EventCard = ({ event }: any) => {
    const [openEModal, setopenEModal] = useState(false);
    const openEModalView = () => {
        setopenEModal(true);
    };
    const closeEModalView = () => {
        setopenEModal(false);
    };
    return (
        <>
            <div className={styles.card} onClick={openEModalView}>
                <div>{event.eventName}</div>
            </div>

            {openEModal ? (
                <EventModal onChange={closeEModalView} event={event} />
            ) : (
                <></>
            )}
        </>
    );
};
