import { useState } from "react";
import styled from "styled-components";
import eventsStore from "../../store/eventsStore";

const Wrapper = styled.div`
  position: fixed;
  padding-top: 25px;
  bottom: 5px;
  left: 5px;
  width: 200px;
  height: 170px;
  background: gray;
  color: black;
  border-radius: 10px;
  z-index: 10;
`;

const options = [
  {
    id: 1,
    value: new Date().toISOString(),
    label: "Текущее время",
  },
  {
    id: 2,
    value: new Date(2023, 1, 6, 12, 15, 55).toISOString(),
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
  // const time = eventsStore.time
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(setTime(selectedOption))
  // }, [selectedOption, dispatch])

  return (
    <Wrapper>
      <h3>Выберите время</h3>
      <p>{selectedOption.slice(0, 19)}</p>
      <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value); 
          // dispatch(setTime(e.target.value))
          eventsStore.setTime(e.target.value)
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
