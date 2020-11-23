import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";


interface Interprops {
  onDaySelected: (selectedDay: moment.Moment) => void;
  eventDates: moment.Moment[];
  onMonthSelected: (selectedMonth: moment.Moment) => void;
}
interface DayBoxProps {
  readonly outOfRange?: boolean;
  readonly isSelected?: boolean;
}




const EventCalendar = ({ onDaySelected, eventDates, onMonthSelected }: Interprops) => {
  const [selectedDay, setSelectedDay] = useState<moment.Moment>(moment());
  const [selectedMonth, setSelectedMonth] = useState<moment.Moment>(moment());
  const [events, setEvents] = useState<number[]>([]);

  const previousMonthDays = () => {
    let previousDays: JSX.Element[] = [];
    let firstOfMonth = selectedMonth.startOf("month");

    // Check if Month starts with a Sunday
    if (firstOfMonth.day() !== 0) {
      let previousSunday = moment(selectedMonth)
        .subtract(1, "months")
        .endOf("month")
        .day("Sunday");
      let dayDifference = firstOfMonth.diff(previousSunday, "day") + 1;

      for (let i = 0; i < dayDifference; i++) {
        let date = moment(firstOfMonth);
        date.subtract(dayDifference - i, "day");
        previousDays.push(
          <DayBox
            isSelected={date.isSame(selectedDay, "day")}
            onClick={() => setSelectedDay(date)}
            outOfRange={true}
            key={i + 31}
          >
            <Day>{date.format("D")}</Day>
          </DayBox>
        );
      }
    }
    return previousDays;
  };

  const getDaysOfMonth = () => {
    let daysOfMonth: JSX.Element[] = [];

    for (let i = 1; i <= selectedMonth.daysInMonth(); i++) {
      let date = moment(selectedMonth);
      date.set("date", i);
      daysOfMonth.push(
        <DayBox
          isSelected={date.isSame(selectedDay, "day")}
          onClick={() => setSelectedDay(date)}
          key={i}
        >
          <Day>{i}</Day>
          <EventMarkerWrapper>
            {events.length > 0 &&
              [...new Array(events[i - 1])].map((x, index) => (
                <EventMarker key={index} />
              ))}
          </EventMarkerWrapper>
        </DayBox>
      );
    }

    return daysOfMonth;
  };

  const Rowsgetter = () => {
    let slots: JSX.Element[] = [...previousMonthDays(), ...getDaysOfMonth()];
    let cells: JSX.Element[] = [];

    return slots.reduce(
      (prev: JSX.Element[][], curr, index) => {
        if (index % 7 === 0) {          
          prev.push(cells);
          cells = [];
        }
        // Push current cell to cells
        cells.push(curr);

        //push last row when reached the end
        if (index === slots.length - 1) {
          prev.push(cells);
        }
        return prev;
      },
      [[]]
    );
  };

  const onChangeMonth = (months: number) => {
    let newSelectedMonth = moment(selectedMonth);
    newSelectedMonth.add(months, "months");
    setSelectedMonth(newSelectedMonth);
  };

  useEffect(() => {
    if (!selectedDay.isSame(selectedMonth, "month")) {
      let newMonth = moment(selectedMonth);
      newMonth.set("month", selectedDay.get("month"));
      setSelectedMonth(newMonth);
    }

    onDaySelected(selectedDay);
  }, [selectedDay ]);

  useEffect(() => {
    let eventArray = [...Array(31)].map(x => 0);
    eventDates.forEach(x => {

        if(moment(x).isSame(selectedMonth, 'month')) {
            let index = +x.format('D') - 1;
            eventArray[index] = eventArray[index] === 3 ? 3 : eventArray[index] + 1;
        }
    });
    setEvents(eventArray);
  }, [selectedMonth])

  useEffect(() => {
    onMonthSelected(selectedMonth);
  }, [selectedMonth])

  return (
    <Wrapper>

    </Wrapper>
  );
};

  export default EventCalendar;