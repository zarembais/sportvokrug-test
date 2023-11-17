import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { selectTime, setTime } from '../../features/eventSlice'
import { useEffect } from "react";

const Wrapper = styled.div`
  position: fixed;
  bottom: 5px;
  left: 5px;
  width: 200px;
  height: 200px;
  background: gray;
  color: black;
  border-radius: 10px;
  z-index: 100;
`;

const options = [
  {
    id: 1,
    value: new Date().toISOString(),
    label: "Текущее время",
  },
  {
    id: 2,
    value: new Date(2023, 1, 6, 12, 15).toISOString(),
    label: "Есть мероприятия",
  },
  {
    id: 3,
    value: new Date(2023, 1, 15, 17, 35).toISOString(),
    label: "Мероприятие идет",
  },
];

const TimeChanger = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const time = useSelector(selectTime)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTime(selectedOption))
  }, [selectedOption, dispatch])

  return (
    <Wrapper>
      <h3>Выберите время</h3>
      <p>{selectedOption.slice(0, 19)}</p>
      <p>Время из Redux:  </p>
      <p>{time.slice(0, 19)}</p>
      <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value); 
          dispatch(setTime(e.target.value))
        }}
      >
        {options.map((o) => (
          <option key={o.id} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default TimeChanger;
