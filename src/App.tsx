import React, { useState } from "react";
import EventCalendar from "./components/EventCalendar";
const moment = require("moment");

function App() {
  const [MonthChose, setMonthChose] = useState<moment.Moment>(moment());
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

  return (
    <div className="App">
      <EventCalendar
        eventDates={generateRandomDays(MonthChose)}
        onMonthSelected={setMonthChose}
        onDaySelected={(selected) => {
          console.log("date! :D", selected);
        }}
      />
    </div>
  );
}

export default App;
