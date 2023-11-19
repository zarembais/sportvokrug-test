import styled from "styled-components";

export const StyledSvg = styled.svg`
  max-width: 100%;
  vertical-align: middle;
  width: 160px;
  height: 160px;
  transform: rotate(-90deg); /* Fix the orientation */
`;

export const StyledCircle = styled.circle`
  stroke: ({color}) => color;
  stroke-dasharray: 439.822971502571;
  stroke-linecap: round;
  cx: 80px;
  cy: 80px;
  r: 70px;
  stroke-width: 10px;
  fill-opacity: 0;
`;

export const StyledText = styled.text`
  font-weight: bold;
  text-anchor: middle;
  fill: white;
  transform: rotate(90deg);
`;
