import "./App.css";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "./query/events";
// import EventsStore from "./store/eventsStore";
import BottomLogo from "./components/BottomLogo/BottomLogo";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import TimeChanger from "./components/TimeChanger/TimeChanger";
import { setAllEvents, selectTime, selectEvents } from "./features/eventSlice";
import Event from "./components/Event/Event";
import PlayingButton from "./components/PlayingButton/PlayingButton";
import Clocks from "./components/Clocks/Clocks";
import CountdownBlock from "./components/CountdownBlock/CountdownBlock";

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

const App = () => {
  const { data, loading, error } = useQuery(GET_EVENTS);
  const dispatch = useDispatch();

  const dateNow = useSelector(selectTime);
  const events = useSelector(selectEvents) || [];
  const activeEvent = useSelector((state) => state.event.activeEvent) || null;

  useEffect(() => {
    dispatch(setAllEvents(data?.videostandEvents?.finished));
    console.log("activeEvent", activeEvent);
  }, [data, loading, dateNow, dispatch, activeEvent]);

  if (loading) {
    return <div style={{ color: "white" }}>Loading...</div>;
  }

  if (error) {
    return <h3>${error.message}</h3>;
  }

  return (
    <>
      {events?.length > 0 ? (
        <>
          <Header>
            <Clocks variant={"top"} />
          </Header>
          <Main>
            <Event size={"28px"} event={events[events?.length - 1]} />

            {activeEvent ? <PlayingButton /> : <CountdownBlock />}
          </Main>
          <NextEvent>
            {events?.length && (
              <Event size={"20px"} event={events[events?.length - 2]} />
            )}
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
};

export default App;
