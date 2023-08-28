import React, { useEffect } from 'react'
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box } from "@mui/material";
import { useSelector } from 'react-redux';
const CalendarPage = () => {

    // const handleDateClick = (selected) => {
    //     const title = prompt("Please enter a new title for your event");
    //     const calendarApi = selected.view.calendar;
    //     calendarApi.unselect();

    //     if (title) {
    //         calendarApi.addEvent({
    //             id: `${selected.dateStr}-${title}`,
    //             title,
    //             start: selected.startStr,
    //             end: selected.endStr,
    //             allDay: selected.allDay,
    //         });
    //     }
    // };

    // const handleEventClick = (selected) => {
    //     if (
    //         window.confirm(
    //             `Are you sure you want to delete the event '${selected.event.title}'`
    //         )
    //     ) {
    //         selected.event.remove();
    //     }
    // };
    let projects = useSelector((state) => state.projects.data);
    const [events, setEvents] = useState([]);

    const convertToEvents = () => {
        const eventsData = projects.map((element) => ({
            title: element.projectName,
            start: element.deadline,
        }));
        setEvents(eventsData);
    };
    useEffect(() => {
        convertToEvents();
    }, [projects]);

    return (
        <>
            <span className='mainTitle'>Calendar </span>
            <Box m="20px">
                {/* <Header title="Calendar" subtitle="Full Calendar Interactive Page" /> */}

                <Box display="flex" justifyContent="space-between">
                    {/* CALENDAR */}
                    <Box flex="1 1 100%" ml="15px">
                        <FullCalendar
                            height="75vh"
                            plugins={[
                                dayGridPlugin,
                                timeGridPlugin,
                                interactionPlugin,
                            ]}
                            headerToolbar={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                            }}
                            initialView="dayGridMonth"
                            // editable={true}
                            selectable={true}
                            selectMirror={true}
                            dayMaxEvents={true}
                            // select={handleDateClick}
                            // eventClick={handleEventClick}
                            events={events}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CalendarPage