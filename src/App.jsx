import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import Logo from "./components/Logo/Logo";
import Clocks from "./components/Clocks/Clocks";
import CountdownWidget from "./components/CountdownWidget/CountdownWidget";
import Event from "./components/Event/Event";
import PlayingButton from "./components/PlayingButton/PlayingButton";
import TimeChanger from "./components/TimeChanger/TimeChanger";

import eventsStore from "./store/eventsStore";
import {
  Footer,
  Header,
  Main,
  NextEvent,
} from "./components/styles/App.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "320px",
  tablet: "709px",
};

const App = observer(() => {
  const events = eventsStore.nextEvent || [];
  const activeEvent = eventsStore.ActiveEvent;

  useEffect(() => {
    const interval = setInterval(() => {
      eventsStore.addSecond();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    eventsStore.fetchEvents();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {events?.length > 0 ? (
        <>
          <Header>
            <Clocks istop="true" />
          </Header>
          <Main>
            <Event event={events[0]} fontSize="28px" lines={2} />
            {activeEvent ? <PlayingButton /> : <CountdownWidget />}
          </Main>
          <NextEvent>
            {events?.length > 1 ? <Event event={events[1]} /> : null}
          </NextEvent>
          <Footer>
            <TimeChanger />
            <Logo istop="false" />
          </Footer>
        </>
      ) : (
        <>
          <Header >
            <Clocks istop="false" />
          </Header>
          <Footer >
            <TimeChanger />
            <Logo istop="false" />
          </Footer>
        </>
      )}
    
    </ThemeProvider>
  );
});

export default App;
