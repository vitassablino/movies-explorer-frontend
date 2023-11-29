import useFormValidation from '../../hooks/useFormValidation';
import './Signin.css';
import FormAuth from '../FormAuth/FormAuth';
import { useUserApi } from '../../hooks/useUserApi';
import { memo, useCallback, useEffect } from 'react';

function Signin() {
  const { values, errors, isValid, handleChange } = useFormValidation();
  const {
    handleLogin,
    isLoading,
    errorMessage,
    resetErrors,
  } = useUserApi();

  useEffect(() => {
    resetErrors();
  }, [ values, resetErrors ]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { email, password } = values;
    handleLogin({ email, password });
  }, [ values, handleLogin ]);

  return (
    <main className="signin">
      <FormAuth
        title="Рады видеть!"
        name="signin"
        onSubmit={handleSubmit}
        isValid={isValid}
        isLoading={isLoading}
        buttonText="Войти"
      >
        <label className="form__input-wrapper form__input-wrapper_type_auth">
          E-mail
          <input
            className={`form__input form__input_type_auth ${
              errors.email ? 'form__input_style_error' : ''
            }`}
            type="email"
            name="email"
            form="signin"
            required
            id="email-input"
            onChange={handleChange}
            value={values.email ?? ''}
            placeholder="Введите email"
            autoComplete="email"
          />
          <span
            className="form__input-error"
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
            form="signin"
            required
            minLength="8"
            maxLength="30"
            id="password-input"
            onChange={handleChange}
            value={values.password ?? ''}
            placeholder="Введите пароль"
            autoComplete="current-password"
          />
          <span
            className="form__input-error"
          >
            {errors.password}
          </span>
        </label>
        <span className="form__input-error">{errorMessage}</span>
      </FormAuth>
    </main>
  );
}

export default memo(Signin);
