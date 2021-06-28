import React, { useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';


const localizer = momentLocalizer(moment);
const myEventsList = [{
    title: 'CUMPLE DEL BOSS',
    start: moment().toDate(),
    end: moment().add(2,'hours').toDate(),
    bgcolor: '#fafafa',
    user: {
        _id: '1234',
        name:'Rafael'
    }
}]
moment.locale('es');
export const CalendarScreen = () => {
    
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        // console.log(e);
        //dispatch( uiOpenModal() );
    }
    const onSelectEvent = (e) => {
        //dispatch( eventSetActive( e ) );
    }

    const onViewChange = (e) => {
         setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        // console.log(e)
        //dispatch( eventClearActiveEvent() );
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }


        return {
            style
        }
    };

    return (
        <div>
            <Navbar />

            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                messages= {messages}
                eventPropGetter= {eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                onSelectSlot={ onSelectSlot }
                view={ lastView }
                components= {{
                    event: CalendarEvent
                }}
            />
            <CalendarModal />
        </div>
    )
}
