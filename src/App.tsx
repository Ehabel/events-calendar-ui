import { useEffect, useState } from "react";
import "./App.css";
import Month from "./containers/Month/Month";
import { getAllEvents } from "./services/services";

function App() {
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        setEvents(await getAllEvents());
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>
            <div className="main">
                <Month events={events} />
            </div>
        </>
    );
}

export default App;
