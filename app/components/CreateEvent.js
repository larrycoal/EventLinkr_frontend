import React, { useState } from "react";
import { DateInput, LocationInput, TextInput } from "./input";

const CreateEvent = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div
        class="modal top fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-mdb-backdrop="true"
        data-mdb-keyboard="true"
      >
        <div class="modal-dialog  ">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create new event
              </h5>
              <button
                type="button"
                class="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="tab-content" id="ex1-content">
                <div
                  class="tab-pane fade show active"
                  id="ex1-pills-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <h2>Enter Event Details</h2>
                  <TextInput
                    name="eventName"
                    type="text"
                    label="Event Name"
                    placeholder="Enter event name"
                  />
                  <DateInput
                    name="eventDate"
                    type="datetime-local"
                    placeholder="Pick event date and time"
                    label="Event Date"
                  />
                  <LocationInput name="eventLocation" type="text" label="Event Location"/>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-pills-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <h5 class="my-3">Page 2</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    accusantium maiores, distinctio ut, quasi sapiente unde,
                    dolore vitae quas officia corrupti maxime fugit. Omnis,
                    nemo?
                  </p>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-pills-3"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  <h5 class="my-3">Page 3</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur provident numquam autem dolor quibusdam
                    voluptates.
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-center align-items-center">
              <ul class="nav nav-pills mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="pill"
                    href="#ex1-pills-1"
                    role="tab"
                    aria-controls={`ex1-pills-${tab}`}
                    aria-selected="true"
                    onClick={() => setTab(tab - 1)}
                    aria-disabled={tab > 1 ? "false" : "true"}
                  >
                    Prev
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-2"
                    data-mdb-toggle="pill"
                    href="#ex1-pills-2"
                    role="tab"
                    aria-controls={`ex1-pills-${tab}`}
                    aria-selected="false"
                    onClick={() => setTab(tab + 1)}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
