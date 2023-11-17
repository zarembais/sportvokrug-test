import { useState } from "react";
import "./CountdownTimer.css";

const CountdownTimer = ({ units, color, now, max }) => {
  const [timeUnits, setTimeUnits] = useState(now);
  
  // size = 160
  // strokeWidth = 10
  // center = size / 2 = 160 / 2 = 80
  // radius = center - strokeWidth = 80 - 10 = 70
      
  const progress = (100 / max) * timeUnits;
  const arcLength = 439.822971502571; // 2 * π * (center - strokeWidth )
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
          {timeUnits}
        </text>
        <text className="svg-pi-text" x="50%" y="-35%">
          {units}
        </text>
      </svg>
    </>
  );
};

export default CountdownTimer;
