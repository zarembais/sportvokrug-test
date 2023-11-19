// import { useState } from "react";
import { observer } from "mobx-react-lite";
import { getRussianWordEnding } from "../../utils/utils";
import {
  StyledSvg,
  StyledCircle,
  StyledText,
} from "../styles/CountdownTimer.styled";

const CountdownTimer = observer(({ units, color, now, max }) => {
  const unit = getRussianWordEnding(now, units);
  const size = 160;
  const strokeWidth = 10;
  const center = size / 2; // 160 / 2 = 80
  const radius = center - strokeWidth; // = 80 - 10 = 70

  const progress = (100 / max) * now;
  const arcLength = 2 * Math.PI * radius; // 439.822971502571
  const arcOffset = arcLength * ((100 - progress) / 100);

  return (
    <>
      <StyledSvg>
        <StyledCircle stroke={color} strokeDashoffset={arcOffset} />
        <StyledText x="50%" y="-50%" fontSize="2.5em">
          {now}
        </StyledText>
        <StyledText x="50%" y="-35%">
          {unit}
        </StyledText>
      </StyledSvg>
    </>
  );
});

export default CountdownTimer;
