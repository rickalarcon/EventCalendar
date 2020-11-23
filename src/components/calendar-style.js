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