import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { selectTime } from "../../features/eventSlice";

const Clocks = ({ variant }) => {
  console.log("CLOCK", variant);
  const dateNow = useSelector(selectTime);

  const [ctime, setTime] = useState(new Date());
  // const UpdateTime = () => {
  //   const time = new Date();
  //   setTime(time);
  // };

  useEffect(() => {
    console.log("dateNow CLOCK", dateNow);
    setTime(new Date(dateNow));
  }, [dateNow]);

  const formatTime = (time) => {
    return `${time.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const formatDate = (time) => {
    return `${time.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    })}`;
  };

  const formatWeekday = (time) => {
    return `${time.toLocaleDateString("ru-RU", { weekday: "long" })}`;
  };

  // const TimerWrapper = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   background-color: #172a52;
  //   border-radius: 10px;
  //   box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  //   width: 383px;
  //   height: 297px;
  // `;

  const StyledDateTop = styled.div`
    font-size: 22px;
    line-height: 26px;
    color: white;
  `;

  const StyledTime = styled.div`
    color: white;
    background-color: {
      ${variant === "top" ? "#172a52" : ""}
    }
    height: {
      ${variant === "top" ? "70px" : ""}
    }
    font-family: "Open Sans", sans-serif;
    font-size: 96px;
    letter-spacing: 7.13px;
    text-align: center;
    line-height: 115px;
    font-weight: bold;
    padding: 0;
    margin: 0;
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

  return (
    <>
        {variant === "top" ? (
          <>
            <StyledTime>{formatTime(ctime)}</StyledTime>
            <StyledDateTop>
              {formatDate(ctime)} · {formatWeekday(ctime)}
            </StyledDateTop>
          </>
        ) : (
          <TimerWrapper>
            <Box style={{ backgroundColor: "#1F3768" }}>
              <StyledTime>{formatTime(ctime)}</StyledTime>
            </Box>
            <Box style={{ backgroundColor: "#172A52" }}>
              <StyledDate>{formatDate(ctime)}</StyledDate>
              <StyledDate>{formatWeekday(ctime)}</StyledDate>
            </Box>
          </TimerWrapper>
        )}
    </>
  );
};

export default Clocks;
