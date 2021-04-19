// write your custom hook here to control your checkout form
import { useState } from "react";

export default function useForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState("");

  const handleChanges = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
  };

  return [values, showSuccessMessage, handleChanges, handleSubmit];
}