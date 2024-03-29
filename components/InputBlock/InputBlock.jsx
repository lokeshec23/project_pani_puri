import { useState, useEffect } from "react";
import "./InputBlock.css";

const InputBlock = ({ onGenerate }) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    onGenerate(state);
  }, [state]);
  const handleChange = (event) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const platePerDay = () => {
    let input = [];
    for (let i = 0; i < state?.days; i++) {
      let field = (
        <input
          type="text"
          placeholder={`No of plate on ${i + 1} day`}
          name={`${i + 1}-plate`}
          onChange={handleChange}
          key={i}
          required
        />
      );
      input.push(field);
    }
    return input;
  };
  return (
    <div className="inputblock-container">
      <div className="input-fields-container">
        <input
          type="text"
          placeholder="Name"
          name="username"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Income (per month)"
          name="income"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="No of days"
          name="days"
          onChange={handleChange}
          required
        />
        {platePerDay()}
      </div>
    </div>
  );
};

export default InputBlock;
