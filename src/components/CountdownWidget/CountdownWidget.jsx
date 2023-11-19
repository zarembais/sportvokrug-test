import { useEffect, useState } from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import eventsStore from "../../store/eventsStore";
import { observer } from "mobx-react-lite";
import { StyledDiv } from "../styles/CountdownWidget.styled";
import { calculateRemainTime } from "../../utils/utils";

const CountdownWidget = observer(() => {
  const nextEvent = eventsStore.nextEvent || [];
  const timeNow = eventsStore.time;
  const [timeRemain, setTimeRemain] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const rest = calculateRemainTime(nextEvent[0]?.dt_start, timeNow);
    setTimeRemain(rest);
  }, [timeNow]);

  return (
    <StyledDiv>
      <CountdownTimer
        units={"day"}
        color={"#0062B5"}
        now={timeRemain.days}
        max={7}
      />
      <CountdownTimer
        units={"hour"}
        color={"#D62F0D"}
        now={timeRemain.hours}
        max={24}
      />
      <CountdownTimer
        units={"min"}
        color={"#FDAE47"}
        now={timeRemain.minutes}
        max={60}
      />
      <CountdownTimer
        units={"sec"}
        color={"#51ACD8"}
        now={timeRemain.seconds}
        max={60}
      />
    </StyledDiv>
  );
});

export default CountdownWidget;
