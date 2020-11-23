import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 400px;
`;

export const MonthButtons = styled.div``;

export const GetMonthButton = styled.button`
  margin: 0 5px;
  border-radius: 6px;
  border: 1px solid #e2e2ea;
  padding: 0;
  color: #92929d;
  background-color: rgb(35, 246, 246);
  padding: 6px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const Month = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin: 0 0 0 8px;
  color: rgb(0, 102, 204);
`;

export const ChoiceMonth = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
`;

export const Year = styled.span`
  font-weight: 400;
  font-size: 14px;
  padding-left: 5px;
`;

export const WeekDay = styled.th`
  color: #92929d;
  text-transform: uppercase;
  font-size: 12px;
  width: 48px;
  margin: 0 5px;
  height: 39px;
`;

export const SelectedDayStyles = css`
  background-color: rgb(35, 183, 246); //light blue ish
  color: white; //text color for the selected day!
  border-radius: 4px;
`;

export const EventMarkerWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EventMarker = styled.div`
  height: 5px;
  width: 5px;
  margin: 0px 1px;
  border-radius: 50%;
  background-color: rgb(35, 183, 246);
`;

export const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  margin: 15%;
`;

//export * from "./calendar-style.js";
// export {Wrapper, MonthSelector,
//  Month, Year,MonthButtons,
//  MonthPickButton, WeekDay,
//  EventMarkerWrapper,EventMarker,
//  Day,SelectedDayStyles };
