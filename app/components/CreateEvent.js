import React, { useState, useEffect } from "react";
import { DateInput, LocationInput, TextInput, SlugInput, DescriptionInput, Button } from "./input";
import styles from "./createevent.module.css"
import { AiOutlineArrowRight } from "react-icons/ai";

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
    <div className={styles.createeventWrapper}>
      <section>
        <div className={styles.title}>
          <span>1</span> <span>Enter Event Details</span>
        </div>
        <div className={styles.formField}>
          <div className={styles.inputWrapper}>
            <TextInput
              label="Event Name"
              name="eventName"
              onChange={handleEventDetails}
            />
            <SlugInput label="Event Slug" name="eventSlug" />
          </div>
          <div className={styles.inputWrapper}>
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
          <div className={styles.inputWrapper}>
            <DescriptionInput
              name="eventDescription"
              label="Event Description"
              placeholder="On behave of John doe we invite you to....."
              onChange={handleEventDetails}
            />
          </div>
          <div>
            <Button
              text="Continue"
              handleClick={() => console.log("click")}
              width="300"
              icon={<AiOutlineArrowRight />}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <span>2</span> <span>Select Template</span>
        </div>
        <div className={styles.templateWrapper}>
          <div>
            <div className={styles.templateImage}></div>
            <p>Birthday template</p>
          </div>
          <div>
            <div className={styles.templateImage}></div>
            <p>Wedding template</p>
          </div>
          <div>
            <div className={styles.templateImage}></div>
            <p>Graduation template</p>
          </div>
          <div>
            <div className={styles.templateImage}></div>
            <p>Birthday template</p>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <span>3</span> <span>Enter Event Details</span>
        </div>
      </section>
    </div>
  );
};

export default CreateEvent;
