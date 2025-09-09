import { useState } from "react";
// Custom hook for managing form state in React
// Usage: const { values, setValues, handleChange } = useForm(defaultValues);
// - values: current form state object
// - setValues: function to manually update form state
// - handleChange: event handler for input changes
// Pass defaultValues as an object with keys matching input names
// Example defaultValues: { name: "", imgUrl: "", weather: "cold" }
// imgUrl and link can be used interchangeably for compatibility of older examples

export function useForm(defaultValues) {
  // Initialize form state with default values
  const [values, setValues] = useState(defaultValues);

    // Resets form fields to default values
    const resetForm = () => {
      setValues(defaultValues);
    };

  const handleChange = (evt) => {
    // Handles input changes for controlled components
    // Updates the corresponding field in the form state
    const { name, value } = evt.target;
    // Update form state using input's name attribute as key
    setValues({ ...values, [name]: value });
  };

  // Return form state and handlers
    return {
      values,
      setValues,
      handleChange,
      resetForm,
    };
}
