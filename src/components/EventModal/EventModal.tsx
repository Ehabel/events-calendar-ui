import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./EventModal.module.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../services/helper";
import { CountdownTimer } from "../Countdown/CountdownTimer";

const EventModal = ({ event, onChange }: any) => {
    const closeEModalView = () => {
        onChange();
    };
    return (
        <div className={styles.modalContainer}>
            <div
                className={styles.outsideModal}
                onClick={closeEModalView}
            ></div>
            <div className={styles.card}>
                <div onClick={closeEModalView} className={styles.close}>
                    <div className={styles.card__info}>
                        <div>Event: {event.eventName}</div>
                        <div>
                            Start: {formatDate(event.startDate.split("T")[0])}
                        </div>
                        <div>
                            End: {formatDate(event.endDate.split("T")[0])}
                        </div>
                        <div>Location: {event.location}</div>
                        <div>Label: {event.label}</div>
                        <div>
                            Time Left:{" "}
                            <CountdownTimer targetDate={event.endDate} />
                        </div>
                    </div>
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={{ color: "#000000" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EventModal;
