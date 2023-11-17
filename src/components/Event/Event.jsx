import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { calculateDates } from "../../utils/utils";

const Event = ({ event: { title, dt_start, dt_end }, size }) => {
  const [dates, setDates] = useState("");

  useEffect(() => {
    setDates(calculateDates(dt_start, dt_end));
    // setDates(calculateDates("2022-11-16T10:00:00+03:00", '2022-11-17T23:59:00+03:00'));
    // setDates(calculateDates("2022-11-16T10:00:00+03:00", '2022-12-17T23:59:00+03:00'));
    // setDates(calculateDates("2022-11-16T10:00:00+03:00", '2023-01-17T23:59:00+03:00'));
  }, [event]);

  // const editName = (event) => {
  //   console.log(event);
  // };

  const Dates = styled.div`
    font-size: 18px;
    color: #98abbe;
    padding-top: 20px;
    letter-spacing: 1px;
  `;

  const Title = styled.h1`
    font-size: ${size};
    color: white;
    width: 65vw;
    max-lines: 2;
    max-height: 2.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.1em;
    padding-bottom: 40px;
  `;

  return (
    <>
      <Dates>{dates}</Dates>
      <Title>{title}</Title>
    </>
  );
};

export default Event;