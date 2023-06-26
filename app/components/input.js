import React from "react";
import style from "./input.module.css";
import {AiOutlineArrowRight} from 'react-icons/ai'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const TextInput = ({ label, name, onChange }) => {
  const handleChange = (e) => {
    e.preventDefault();
    onChange({ [e.target.name]: e.target.value });
  };
  return (
    <div className={style.input_wrapper}>
      <label for={name}>{label}</label>
      <input type="text" name={name} id={name} onChange={handleChange} />
    </div>
  );
};
const SlugInput = ({ label, type, name, value }) => {
  return (
    <div className={style.input_wrapper}>
      <label for={name}>{label}</label>
      <input type="text" name={name} id={name} value={value} disabled />
    </div>
  );
};
const DateInput = ({ label, name, onChange }) => {
  const handleChange = (e) => {
    e.preventDefault();
    onChange({ [e.target.name]: e.target.value });
  };
  return (
    <div className={style.input_wrapper}>
      <label for={name}>{label}</label>
      <input
        type="datetime-local"
        name={name}
        id={name}
        onChange={handleChange}
      />
    </div>
  );
};
const DescriptionInput = ({ label, name, onChange, placeholder }) => {
  const handleChange = (e) => {
    e.preventDefault();
    onChange({ [e.target.name]: e.target.value });
  };
  return (
    <div className={style.input_wrapper}>
      <label for={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        rows="10"
        cols="20"
        placeholder={placeholder}
        onChange={handleChange}
      ></textarea>
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
      onChange({ location: description });
      clearSuggestions();

      // Get latitude and longitude via utility functions
      //    getGeocode({ address: description }).then((results) => {
      //      const { lat, lng } = getLatLng(results[0]);
      //      console.log("📍 Coordinates: ", { lat, lng });
      //    });
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
      <label for={name}>{label}</label>
      <input
        value={value}
        type={type}
        name={name}
        id={name}
        onChange={handleInput}
        disabled={!ready}
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};
const Button = ({ text, handleClick, width }) => {
  return (
    <div className={style.buttonWrapper}>
      <button
        className={style.button}
        onClick={handleClick}
        style={{width:`${width+"px"}`}}
      >
        {text}
        <AiOutlineArrowRight/>
      </button>
    </div>
  );
};
export {
  TextInput,
  DateInput,
  LocationInput,
  SlugInput,
  DescriptionInput,
  Button,
};
