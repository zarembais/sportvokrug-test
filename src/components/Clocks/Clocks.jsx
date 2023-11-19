import { observer } from "mobx-react-lite";

import { formatDate, formatTime, formatWeekday } from "../../utils/utils";
import eventsStore from "../../store/eventsStore";
import {
  Box,
  StyledDate,
  StyledDateTop,
  StyledTime,
  TimerWrapper,
} from "../styles/Clocks.styled";

const Clocks = observer(({ istop }) => {
  const timeNow = eventsStore.time || new Date();
  const t = formatTime(timeNow);
  const w = formatWeekday(timeNow);
  const d = formatDate(timeNow);

  return (
    <>
      {istop === "true" ? (
        <>
          <StyledTime istop={istop}>{t}</StyledTime>
          <StyledDateTop>
            {d} · {w}
          </StyledDateTop>
        </>
      ) : (
        <TimerWrapper>
          <Box style={{ backgroundColor: "#1F3768" }}>
            <StyledTime istop={istop}>{t}</StyledTime>
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
