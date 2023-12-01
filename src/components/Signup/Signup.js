import useFormValidation from '../../hooks/useFormValidation';
import './Signup.css';
import FormAuth from '../FormAuth/FormAuth';
import { useUserApi } from '../../hooks/useUserApi';
import { memo, useCallback, useEffect } from 'react';

function Signup() {
  const { values, errors, isValid, handleChange } = useFormValidation();
  const {
    handleRegister,
    isLoading,
    errorMessage,
    resetErrors,
  } = useUserApi();

  useEffect(() => {
    resetErrors();
  }, [ values, resetErrors ]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { name, email, password } = values;
    handleRegister({ name, email, password });
  }, [ values, handleRegister ]);

  return (
    <main className="signup">
      <FormAuth
        title="Добро пожаловать!"
        name="signup"
        onSubmit={handleSubmit}
        isValid={isValid}
        isLoading={isLoading}
        buttonText="Зарегистрироваться"
      >
        <label className="form__input-wrapper form__input-wrapper_type_auth">
          Имя
          <input
            className={`form__input form__input_type_auth ${
              errors.name ? 'form__input_style_error' : ''
            }`}
            type="text"
            name="name"
            form="signup"
            required
            minLength="2"
            maxLength="30"
            id="name-input"
            onChange={handleChange}
            value={values.name ?? ''}
            placeholder="Введите имя"
            autoComplete="username"
          />
          <span
            className={`form__input-error ${
              errors.name ? 'form__input-error_active' : ''
            }`}
          >
            {errors.name}
          </span>
        </label>
        <label className="form__input-wrapper form__input-wrapper_type_auth">
          E-mail
          <input
            className={`form__input form__input_type_auth ${
              errors.email ? 'form__input_style_error' : ''
            }`}
            type="email"
            name="email"
            form="signup"
            required
            id="email-input"
            onChange={handleChange}
            value={values.email ?? ''}
            placeholder="Введите email"
            autoComplete="email"
          />
          <span
            className={`form__input-error ${
              errors.email ? 'form__input-error_active' : ''
            }`}
          >
            {errors.email}
          </span>
        </label>
        <label className="form__input-wrapper form__input-wrapper_type_auth">
          Пароль
          <input
            className={`form__input form__input_type_auth ${
              errors.password ? 'form__input_style_error' : ''
            }`}
            type="password"
            name="password"
            form="signup"
            required
            minLength="8"
            maxLength="30"
            id="password-input"
            onChange={handleChange}
            value={values.password ?? ''}
            placeholder="Введите пароль"
            autoComplete="new-password"
          />
          <span
            className={`form__input-error ${
              errors.password ? 'form__input-error_active' : ''
            }`}
          >
            {errors.password}
          </span>
        </label>
        <span className="form__input-error">{errorMessage}</span>
      </FormAuth>
    </main>
  );
}

export default memo(Signup);
