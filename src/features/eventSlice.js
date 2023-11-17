import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    allEvents: [],
    events: [],
    time: "",
    // time: new Date(2023, 1, 26, 12, 15).toISOString(),
    // time: new Date(2023, 1, 6, 12, 15).toISOString(),
    // time: new Date(2023, 1, 20, 12, 15).toISOString(),
    activeEvent: null,
  },
  reducers: {
    addSecond: (state, action) => {
      var numberOfMlSeconds = new Date(action.payload).getTime();
      state.time = new Date(numberOfMlSeconds + 1000).toISOString();
      // console.log("newDateObj", state.time);
    },
    setAllEvents: (state, action) => {
      state.allEvents = action.payload;
      const filteredEvents = action.payload?.filter((event) => {
        return state.time < event.dt_end;
      });
      state.events = filteredEvents;
      filteredEvents?.forEach((event) => {
        if (action.payload > event.dt_start && action.payload < event.dt_end) {
          state.activeEvent = event;
        }
      });
    },
    setEvents: (state, action) => {
      const filteredEvents = action.payload?.filter((event) => {
        return state.time < event.dt_end;
      });
      state.events = filteredEvents;
      filteredEvents?.forEach((event) => {
        if (action.payload > event.dt_start && action.payload < event.dt_end) {
          state.activeEvent = event;
        }
      });
    },
    setTime: (state, action) => {
      console.log("SET_TIME", action.payload);
      state.time = action.payload;
      const filteredEvents = state.allEvents?.filter((event) => {
        return action.payload < event.dt_end;
      });
      state.events = filteredEvents;
      filteredEvents?.forEach((event) => {
        if (action.payload > event.dt_start && action.payload < event.dt_end) {
          state.activeEvent = event;
          console.log("FOUND");
        }
      });
    },
  },
});

export const { addSecond, setEvents, setTime, setAllEvents } =
  eventSlice.actions;

export const selectTime = (state) => state.event.time;
export const selectEvents = (state) => state.event.events;

export default eventSlice.reducer;
