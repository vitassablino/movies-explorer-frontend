import useFormValidation from '../../hooks/useFormValidation';
import './Signin.css';
import FormAuth from '../FormAuth/FormAuth';

function Signin() {
  const { values, errors, isFormValid, onChange } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="signin">
      <FormAuth
        title="Рады видеть!"
        name="signin"
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
        buttonText="Войти"
      >
        <label className="form__input-wrapper">
          E-mail
          <input
            className={`form__input ${
              errors.email ? 'form__input_style_error' : ''
            }`}
            type="text"
            name="email"
            form="signin"
            required
            id="email-input"
            onChange={onChange}
            value={values.email || ''}
          />
          <span
            className={`form__input-error ${
              errors.email ? 'form__input-error_active' : ''
            }`}
          >
            {errors.email || ''}
          </span>
        </label>
        <label className="form__input-wrapper">
          Пароль
          <input
            className={`form__input ${
              errors.password ? 'form__input_style_error' : ''
            }`}
            type="password"
            name="password"
            form="signin"
            required
            minLength="6"
            maxLength="30"
            id="password-input"
            onChange={onChange}
            value={values.password || ''}
          />
          <span
            className={`form__input-error ${
              errors.password ? 'form__input-error_active' : ''
            }`}
          >
            {errors.password || ''}
          </span>
        </label>
      </FormAuth>
    </main>
  );
}

export default Signin;
