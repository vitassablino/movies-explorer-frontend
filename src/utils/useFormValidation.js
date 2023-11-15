
import { useCallback, useState } from "react";
import isEmail from "validator/es/lib/isEmail";

function useFormValidation() {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setFormValid] = useState(false);


  function onChange(e) {
    const target = e.target;
    const { value, name } = target;
    if (name === "name" && target.validity.patternMismatch) {
      target.setCustomValidity(
        "Недопустимое имя пользователя."
      );
    } else if (name === "email" && !isEmail(value)) {
      target.setCustomValidity(
        "Недопустимый e-mail пользователя."
      );
    } else {
      target.setCustomValidity("");
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setFormValid(target.closest("form").checkValidity());
  }


  const resetValidation = useCallback(
    (isFormValid = false, values = {}, errors = {}) => {
      setFormValid(isFormValid);
      setValues(values);
      setErrors(errors);
    },
    [setFormValid, setValues, setErrors]
  );

  return {
    values,
    errors,
    isFormValid,
    onChange,
    resetValidation,
  };
}

export default useFormValidation;