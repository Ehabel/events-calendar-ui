import { useEffect, useState } from "react";
import styles from "./Day.module.scss";
import DayModal from "../DayModal/DayModal";
import { EventCard } from "../EventCard/EventCard";

export const Day = ({ dayNum, currDate, events }: any) => {
    const [openModal, setopenModal] = useState(false);
    const [dayEvents, setDayEvents] = useState([]);
    const openModalView = () => {
        setopenModal(true);
    };
    const closeModalView = () => {
        setopenModal(false);
    };

    useEffect(() => {
        const newEvents = events.filter((event: any) => {
            return (
                event.startDate.split("T")[0] ==
                currDate.toISOString().split("T")[0]
            );
        });
        setDayEvents(newEvents);
    }, [events]);

    return dayNum !== 0 ? (
        <>
            <>
                <div className={styles.card} onClick={openModalView}>
                    {dayNum}
                </div>
                <div>
                    {dayEvents.map((event: any) => {
                        return (
                            <EventCard
                                key={event.eventName + event.id}
                                event={event}
                            />
                        );
                    })}
                </div>
            </>
            {openModal ? <DayModal onChange={closeModalView} /> : <></>}
        </>
    ) : (
        <div className={styles.card}>
            <p></p>
        </div>
    );
};
