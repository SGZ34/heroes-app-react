import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [valueInput, setValueInput] = useState(initialForm);

  const handleInputChange = ({ target: { name, value } }) => {
    setValueInput({ ...valueInput, [name]: value });
  };

  return {
    ...valueInput,
    valueInput,
    handleInputChange,
  };
};
