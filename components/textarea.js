"use client";

import { useState } from "react";

const Textarea = ({
  name,
  value,
  error,
  label,
  placeholder,
  rows = 5,
  onBlur = () => {},
  onFocus = () => {},
  onChange = () => {},
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <label htmlFor={name} className="relative block w-full">
      <span
        className={`absolute py-0 px-2 bg-secondary text-primary pointer-events-none ${focus || value ? "text-sm text-tertiary -top-3 left-5 border-x-2 border-x-tertiary" : " top-2 left-1"} transition-all duration-300 ease-in-out`}
      >
        {label}
      </span>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={!focus || !value ? "" : placeholder}
        className="w-full bg-secondary border border-primary text-primary py-2 px-3 placeholder:text-secondary/30 focus:outline-none focus:ring-none focus:border-2 focus:border-tertiary "
        onFocus={(event) => {
          setFocus(true);
          onFocus(event);
        }}
        onBlur={(event) => {
          setFocus(false);
          onBlur(event);
        }}
        rows={rows}
        {...rest}
      />
    </label>
  );
};

export default Textarea;
