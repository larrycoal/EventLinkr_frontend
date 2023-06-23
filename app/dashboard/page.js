"use client";
import React, { useState, useEffect, useCallback } from "react";
import style from "./dashboard.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import CreateEvent from "../components/CreateEvent";
import * as mdb from "mdb-ui-kit";
export default function page() {
  const { data, status } = useSession();
  const [events, setEvents] = useState(null);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const fetchEvent = useCallback(() => {
    try {
      fetch(
        `http://localhost:1337/api/events?filters[user][$eq]=${data?.user.email}`
      )
        .then((res) => res.json())
        .then(({ data }) => setEvents(() => data));
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    fetchEvent();
  }, [data?.user.email]);
  useEffect(() => {
    console.log(events);
  }, [events]);
  return (
    <>
      <div className={style.dashboard_wrapper}>
        <div className={style.backboard}></div>
        <div className={style.dashboard_container}>
          <div className={style.top}>
            <div className={style.left}>
              <p>Welcome back!</p>
              <h2>{data?.user.name}</h2>
            </div>
            <button type="button" className={`${style.right}`} onClick={()=>setShowCreateEvent(true)}>
              Create New Event
            </button>
          </div>
          <div className={style.bottom}>
            {!showCreateEvent ? (
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">Event Link</th>
                    <th scope="col">Type</th>
                    <th scope="col">RSVP</th>
                    <th scope="col">Location</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events &&
                    events.map((event, idx) => (
                      <tr key={idx}>
                        <th scope="row">{idx + 1}</th>
                        <td>{event.attributes.eventName}</td>
                        <td>{event.attributes.eventLink}</td>
                        <td>{event.attributes.eventType}</td>
                        <td>{event.attributes.eventRSVP}</td>
                        <td>{event.attributes.eventLocation}</td>
                        <td>
                          {new Date(
                            event.attributes.eventDate
                          ).toLocaleDateString()}
                        </td>
                        <td>Action</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            ) : (
              <CreateEvent />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
