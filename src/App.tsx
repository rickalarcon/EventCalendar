import React, {useState} from 'react';
import EventCalendar from "./components/EventCalendar";
const moment = require("moment");

 

 const generateRandomDays = (currentMonth: moment.Moment) => {
    let events = [];
    let maxDay = +currentMonth.endOf("month").format("D");
    for (let i = 0; i < 40; i++) {
      let newDate = moment(currentMonth);
      newDate.set(
        "date", 
        1 + Math.floor((maxDay - 1) * Math.random()) //randomDay
        );
      events.concat(newDate);
    }
    return events;
  };

function App() {
  return (
    <div className="App">
     "HELLO!"
    



    </div>
  );
}

export default App;
