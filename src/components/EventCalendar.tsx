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