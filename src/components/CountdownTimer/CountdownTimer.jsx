// import { useState } from "react";
import { observer } from "mobx-react-lite";
import "./CountdownTimer.css";
import { getRussianWordEnding } from "../../utils/utils";

const CountdownTimer = observer(({ units, color, now, max }) => {
  // console.log(units)
  // const [timeUnits, setTimeUnits] = useState(now);
  // console.log("units", units, "now", now, "max", max);

  const unit = getRussianWordEnding(now, units);
  const size = 160
  const strokeWidth = 10
  const center = size / 2 // 160 / 2 = 80
  const radius = center - strokeWidth // = 80 - 10 = 70

  const progress = (100 / max) * now;
  const arcLength = 2 * Math.PI * radius; // 439.822971502571
  const arcOffset = arcLength * ((100 - progress) / 100);

  return (
    <>
      <svg className="svg-pi">
        <circle className="svg-pi-track" />
        <circle
          className="svg-pi-indicator"
          style={{ stroke: color, strokeDashoffset: arcOffset }}
        />
        <text className="svg-pi-text" x="50%" y="-50%" fontSize="2.5em">
          {now}
        </text>
        <text className="svg-pi-text" x="50%" y="-35%">
          {unit}
        </text>
      </svg>
    </>
  );
});

export default CountdownTimer;
