import { useEffect } from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { selectEvents, selectTime } from "../../features/eventSlice";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const calculateLeftTime = (date, now) => {
  const diff = Math.abs(new Date(date) - new Date(now));
  console.log("diff", diff);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)) % 7,
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownBlock = () => {
  const nextEvent = useSelector(selectEvents);
  const dateNow = useSelector(selectTime);
  const [timeLeft, setTimeLeft] = useState();
  //   const [time, setTime] = useState();

  useEffect(() => {
    const rest = calculateLeftTime(
      nextEvent[nextEvent?.length - 1].dt_start,
      dateNow
    );

    setTimeLeft(rest);
  }, [nextEvent?.length]);

  return (
    <>
      {timeLeft && (
        <StyledDiv>
          <CountdownTimer
            units={"дней"}
            color={"#0062B5"}
            now={timeLeft.days}
            max={7}
          />
          <CountdownTimer
            units={"часов"}
            color={"#D62F0D"}
            now={timeLeft.hours}
            max={24}
          />
          <CountdownTimer
            units={"минут"}
            color={"#FDAE47"}
            now={timeLeft.minutes}
            max={60}
          />
          <CountdownTimer
            units={"секунд"}
            color={"#51ACD8"}
            now={timeLeft.seconds}
            max={60}
          />
        </StyledDiv>
      )}
    </>
  );
};

export default CountdownBlock;
