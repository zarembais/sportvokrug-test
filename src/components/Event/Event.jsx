import { useEffect, useState } from "react";
import styled from "styled-components";
import { calculateDates } from "../../utils/utils";

const Event = ({ event: { title, dt_start, dt_end }, isbig }) => {
  const [dates, setDates] = useState("");

  useEffect(() => {
    setDates(calculateDates(dt_start, dt_end));
<<<<<<< HEAD
  }, [dt_start, dt_end]);
=======
  }, []);
>>>>>>> cba700126dddb50fce14369ae1027087fe54f0ad

  return (
    <>
      <Dates>{dates}</Dates>
      <Title isbig={isbig}>{title}</Title>
    </>
  );
};

export default Event;

const Title = styled.h1`
  font-size: ${({ isbig }) => (isbig === "true" ? "28px" : "20px")};
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

const Dates = styled.div`
  font-size: 18px;
  color: #98abbe;
  padding-top: 20px;
  letter-spacing: 1px;
`;
