import React from "react";
import style from "./input.module.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const TextInput = ({ label, type, name, onChange }) => {
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div className={style.input_wrapper}>
      <label id={name}>{label}</label>
      <input type={type} name={name} onChange={handleChange} />
    </div>
  );
};
const DateInput = ({ label, type, name, onChange }) => {
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div className={style.input_wrapper}>
      <label id={name}>{label}</label>
      <input type={type} name={name} onChange={handleChange} />
    </div>
  );
};
const LocationInput = ({ label, type, name, onChange }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });
  console.log(ready,value)
   const handleInput = (e) => {
     // Update the keyword of the input element
     setValue(e.target.value);
   };
   const handleSelect =
     ({ description }) =>
     () => {
       // When user selects a place, we can replace the keyword without request data from API
       // by setting the second parameter to "false"
       setValue(description, false);
       clearSuggestions();

       // Get latitude and longitude via utility functions
       getGeocode({ address: description }).then((results) => {
         const { lat, lng } = getLatLng(results[0]);
         console.log("📍 Coordinates: ", { lat, lng });
       });
     };

const renderSuggestions = () =>
  data.map((suggestion) => {
    const {
      place_id,
      structured_formatting: { main_text, secondary_text },
    } = suggestion;

    return (
      <li key={place_id} onClick={handleSelect(suggestion)}>
        <strong>{main_text}</strong> <small>{secondary_text}</small>
      </li>
    );
  });
  return (
    <div className={style.input_wrapper}>
      <label id={name}>{label}</label>
      <input
        value={value}
        type={type}
        name={name}
        onChange={handleInput}
        disabled={!ready}
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};
export { TextInput, DateInput, LocationInput };
