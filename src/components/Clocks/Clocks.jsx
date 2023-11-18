import { useEffect } from "react";
import styled, { css } from "styled-components";
import { observer } from "mobx-react-lite";

import { formatDate, formatTime, formatWeekday } from "../../utils/utils";
import eventsStore from "../../store/eventsStore";

const Clocks = observer(({ top }) => {
  const timeNow = eventsStore.time || new Date();
  const t = formatTime(timeNow);
  const w = formatWeekday(timeNow);
  const d = formatDate(timeNow);

  useEffect(() => {
    const interval = setInterval(() => {
      eventsStore.addSecond();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {top ? (
        <>
          <StyledTime top>{t}</StyledTime>
          <StyledDateTop>
            {d} · {w}
          </StyledDateTop>
        </>
      ) : (
        <TimerWrapper>
          <Box style={{ backgroundColor: "#1F3768" }}>
            <StyledTime top="false">{t}</StyledTime>
          </Box>
          <Box style={{ backgroundColor: "#172A52" }}>
            <StyledDate>{d}</StyledDate>
            <StyledDate>{w}</StyledDate>
          </Box>
        </TimerWrapper>
      )}
    </>
  );
});

export default Clocks;

const StyledTime = styled.div`
  color: white;
  background-color: "#172a52";
  height: 70px;
  font-family: "Open Sans", sans-serif;
  font-size: 96px;
  letter-spacing: 7.13px;
  text-align: center;
  line-height: 115px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  ${(props) =>
    props.top &&
    css`
      height: "";
      background-color: "";
    `}
`;

const StyledDateTop = styled.div`
  font-size: 22px;
  line-height: 26px;
  color: white;
`;

const StyledDate = styled.div`
  font-size: 37px;
  line-height: 44px;
  color: white;
  font-weight: bold;
`;

const TimerWrapper = styled.div`
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

const Box = styled.div`
  height: 50%;
  width: 100%;
  padding: 20px;
  margin: 0;
  align-items: center;
`;