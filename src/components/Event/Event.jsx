import { useEffect, useState } from "react";
import { combineDates } from "../../utils/utils";
import { Dates, Title } from "../styles/Event.styled";

const Event = ({ event: { title, dt_start, dt_end }, fontSize, lines }) => {
  const [dates, setDates] = useState("");

  useEffect(() => {
    setDates(combineDates(dt_start, dt_end));
  }, [dt_start, dt_end]);

  return (
    <>
      <Dates>{dates}</Dates>
      <Title fontSize={fontSize} lines={lines}>{title}</Title>
    </>
  );
};

export default Event;

