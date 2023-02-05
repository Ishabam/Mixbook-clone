import React from 'react'
// import calendar1 from '../Image/calendar1.jpg'
// import calendar2 from '../Image/calendar2.jpg'
// import calendar3 from '../Image/calendar3.jpg'
// import calendar4 from '../Image/calendar4.jpg'
import './Calendar.css'



const Calendar = () => {
  return (
    <div className='calendarMains'>
        <h2>What Will You Create Today ?</h2>

        <div className='CalendarDiv'>
            <div className='CCard'>
                <img src={'Image/calendar1.jpg'} alt="" />
                <div>Photo Books</div>
            </div>

            <div className='CCard'>
                <img src={'Image/calendar2.jpg'} alt="" />
                <div>Cards</div>
            </div>

            <div className='CCard'>
                <img src={'Image/calendar3.jpg'} alt="" />
                <div>Calendars</div>
            </div>

            <div className='CCard'>
                <img src={'Image/calendar4.jpg'} alt="" />
                <div>Home Decors</div>
            </div>

        </div>

    </div>
  );
}

export default Calendar