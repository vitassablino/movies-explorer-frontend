import useFormValidation from "../../utils/useFormValidation";
import "./Signup.css";
import FormAuth from "../FotmAuth/FormAuth";
import { REG_EXP } from "../../utils/constants";

function Signup() {
  const { values, errors, isFormValid, onChange } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return  (
    <main className="signup">
      <FormAuth
        title="Добро&nbsp;пожаловать!"
        name="signup"
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
        buttonText="Зарегистрироваться"
      >
        <label className="form__input-wrapper">
          Имя
          <input
            className={`form__input ${
              errors.name ? "form__input_style_error" : ""
            }`}
            type="text"
            name="name"
            form="signup"
            required
            minLength="2"
            maxLength="30"
            id="name-input"
            onChange={onChange}
            value={values.name || ""}
            pattern={REG_EXP}
          />
          <span
            className={`form__input-error ${
              errors.name ? "form__input-error_active" : ""
            }`}
          >
            {errors.name || ""}
          </span>
        </label>
        <label className="form__input-wrapper">
          E-mail
          <input
            className={`form__input ${
              errors.email ? "form__input_style_error" : ""
            }`}
            type="text"
            name="email"
            form="signup"
            required
            id="email-input"
            onChange={onChange}
            value={values.email || ""}
          />
          <span
            className={`form__input-error ${
              errors.email ? "form__input-error_active" : ""
            }`}
          >
            {errors.email || ""}
          </span>
        </label>
        <label className="form__input-wrapper">
          Пароль
          <input
            className={`form__input ${
              errors.password ? "form__input_style_error" : ""
            }`}
            type="password"
            name="password"
            form="signup"
            required
            minLength="6"
            maxLength="30"
            id="password-input"
            onChange={onChange}
            value={values.password || ""}
          />
          <span
            className={`form__input-error ${
              errors.password ? "form__input-error_active" : ""
            }`}
          >
            {errors.password || ""}
          </span>
        </label>
      </FormAuth>
    </main>
  );
}

export default Signup;