import styled from "styled-components";

export const StyledDateTop = styled.div`
  font-size: 22px;
  line-height: 26px;
  color: white;
`;

export const StyledTime = styled.div`
  height: ${({ istop }) => (!istop ? "70px" : "")};
  color: white;
  background-color: "#172a52";
  font-family: "Open Sans", sans-serif;
  font-size: 96px;
  letter-spacing: 7.13px;
  text-align: center;
  line-height: 115px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

export const StyledDate = styled.div`
  font-size: 37px;
  line-height: 44px;
  color: white;
  font-weight: bold;
`;

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #172a52;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 383px;
  height: 297px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Box = styled.div`
  height: 50%;
  width: 100%;
  padding: 20px;
  margin: 0;
  align-items: center;
`;
