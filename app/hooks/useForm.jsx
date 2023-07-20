import React, { useState } from "react";

export const useForm = (INITIAL_STATE = {}) => {
  const [form, setForm] = useState(INITIAL_STATE);

  const onChange = ({ target: { value, name } }) => {
    if (!name) {
      console.warn("This field don't have a name. The state was not updated");
      return;
    }
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return {
    onChange,
    form,
    setForm,
  };
};
