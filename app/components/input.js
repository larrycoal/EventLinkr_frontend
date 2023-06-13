import React from "react";
import style from "./input.module.css";

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
export { TextInput, DateInput, LocationInput };
