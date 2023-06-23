import React, { useState, useEffect } from "react";
import { DateInput, LocationInput, TextInput, SlugInput, DescriptionInput } from "./input";

const CreateEvent = () => {
  const [tab, setTab] = useState(1);
  const [eventDetails, setEventDetails] = useState({});
  const handleEventDetails = (eventDetail) => {
    setEventDetails(() => ({
      ...eventDetails,
      ...eventDetail,
    }));
  };
  useEffect(() => {
    console.log(eventDetails);
  }, [eventDetails]);
  return (
    <div>
      <section>
        <div>
          <span>1</span> <span>Enter Event Details</span>
        </div>
        <div>
          <div>
            <div>
              <TextInput
                label="Event Name"
                name="eventName"
                onChange={handleEventDetails}
              />
              <SlugInput label="Event Slug" name="eventSlug" />
            </div>
          </div>
          <div>
            <DateInput
              label="Event Date"
              name="eventDate"
              onChange={handleEventDetails}
            />
            <LocationInput
              label="Event Location"
              name="eventLocation"
              onChange={handleEventDetails}
            />
          </div>
          <div>
            <DescriptionInput
              name="eventDescription"
              label="Event Description"
              placeholder="On behave of John doe we invite you to....."
              onChange={handleEventDetails}
            />
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default CreateEvent;
