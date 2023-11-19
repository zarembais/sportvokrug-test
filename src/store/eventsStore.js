import { makeAutoObservable } from "mobx";
import { query } from "../api/query";

class EventStore {
  events = [];
  time = new Date();
  HHMM = new Date().toISOString().slice(11, 16);
  timer = {};
  nextEvent = [];
  activeEvent = null;
  constructor() {
    makeAutoObservable(this);
  }

  addSecond() {
    this.time = new Date(this.time.setSeconds(this.time.getSeconds() + 1));
  }

  async fetchEvents() {
    try {
      const data = await fetch(`${import.meta.env.VITE_URL}/graphql/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      });
      const res = await data.json();
      this.events = res.data.videostandEvents.finished;
      this.NextEvent;
      this.ActiveEvent;
    } catch (error) {
      console.log(error);
    }
  }

  setTime(time) {
    this.time = new Date(time);
    this.NextEvent;
    this.ActiveEvent;
  }

  get ActiveEvent() {
    const isoTime = this.time.toISOString();
    return (
      this.events.find(
        (event) => event.dt_start < isoTime && event.dt_end > isoTime
      ) || null
    );
  }

  get NextEvent() {
    const isoTime = this.time.toISOString();
    const next = this.events
      .filter((event) => event.dt_end > isoTime)
      .sort((a, b) => a.dt_start.localeCompare(b.dt_start));
    this.nextEvent = next;
    return next;
  }
}

export default new EventStore();
