import { useState } from "react";

export function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    console.log("Form values updated:", { ...values, [name]: value });
  };

  return {
    values,
    setValues,
    handleChange,
  };
}
