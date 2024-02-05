import { useState } from "react";
import { observer } from "mobx-react-lite";

import eventsStore from "../../store/eventsStore";
import { Wrapper } from "../styles/TimeChanger.styled";

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
  {
    id: 4,
    value: new Date(2026, 2, 5, 23, 59, 55).toISOString(),
    label: "Следущего нет",
  },
];

const TimeChanger = observer(() => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  return (
    <Wrapper>
      <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
          eventsStore.setTime(e.target.value);
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
});

export default TimeChanger;
