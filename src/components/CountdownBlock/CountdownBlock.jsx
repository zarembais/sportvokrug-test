import { useEffect } from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import styled from "styled-components";
import { useState } from "react";
import eventsStore from "../../store/eventsStore";
import { observer } from "mobx-react-lite";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const calculateLeftTime = (date, now) => {
  const diff = Math.abs(new Date(date) - new Date(now));
  // console.log("diff", diff);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)) % 7,
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownBlock = observer(() => {
  const nextEvent = eventsStore.nextEvent || [];
  const timeNow = eventsStore.time;
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const rest = calculateLeftTime(nextEvent[0]?.dt_start, timeNow);
    // console.log("timeLeft", timeLeft);
    // console.log("rest", rest);
    setTimeLeft(rest);
  }, [timeNow]);

  return (
    <>
      <StyledDiv>
        <CountdownTimer
          units={"day"}
          color={"#0062B5"}
          now={timeLeft.days}
          max={7}
        />
        <CountdownTimer
          units={"hour"}
          color={"#D62F0D"}
          now={timeLeft.hours}
          max={24}
        />
        <CountdownTimer
          units={"min"}
          color={"#FDAE47"}
          now={timeLeft.minutes}
          max={60}
        />
        <CountdownTimer
          units={"sec"}
          color={"#51ACD8"}
          now={timeLeft.seconds}
          max={60}
        />
      </StyledDiv>
    </>
  );
});

export default CountdownBlock;
