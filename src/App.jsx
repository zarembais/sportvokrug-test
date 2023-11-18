import "./App.css";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";

import BottomLogo from "./components/BottomLogo/BottomLogo";
import Clocks from "./components/Clocks/Clocks";
import CountdownBlock from "./components/CountdownBlock/CountdownBlock";
import Event from "./components/Event/Event";
import PlayingButton from "./components/PlayingButton/PlayingButton";
import TimeChanger from "./components/TimeChanger/TimeChanger";

import eventsStore from "./store/eventsStore";

const App = observer(() => {
  const events = eventsStore.nextEvent || [];
  const activeEvent = eventsStore.ActiveEvent;

  useEffect(() => {
    eventsStore.fetchEvents();
  }, []);

  return (
    <>
      {events?.length > 0 ? (
        <>
          <Header>
            <Clocks top />
          </Header>
          <Main>
            <Event size={"28px"} event={events[0]} />
            {activeEvent ? <PlayingButton /> : <CountdownBlock />}
          </Main>
          <NextEvent>
            {events?.length > 1 && <Event size={"20px"} event={events[1]} />}
          </NextEvent>
        </>
      ) : (
        <Clocks variant={"center"} isEmpty />
      )}

      <Footer>
        <TimeChanger />
        <BottomLogo />
      </Footer>
    </>
  );
});

export default App;

const Header = styled.header`
  color: black;
  padding-top: 20px;
  height: 20vh;
  width: 100%;
  background-color: #green;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45vh;
  width: 100%;
  background: #1e3465;
`;

const NextEvent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  width: 100%;
`;

const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  position: fixed;
  bottom: 5px;
`;
