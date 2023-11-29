import './FormAuth.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import GreetingTitle from '../GreetingTitle/GreetingTitle';
import { memo } from 'react';

function FormAuth(props) {
  const {
    title,
    name,
    onSubmit,
    isValid,
    buttonText,
    children,
    isLoading,
    ...otherProps
  } = props;
  return (
    <section className="form-auth">
      <Logo place="auth" />
      <GreetingTitle title={title} />
      <Form
        name={name}
        onSubmit={onSubmit}
        isValid={isValid}
        isLoading={isLoading}
        buttonText={buttonText}
      >
        {children}
      </Form>
      {name === 'signup' ? (
        <p className="form-auth__text">
          Уже зарегистрированы?{' '}
          <Link to="/signin" className="form-auth__link">
            Войти
          </Link>
        </p>
      ) : (
        <p className="form-auth__text">
          {'Ещё не зарегистрированы? '}
          <Link to="/signup" className="form-auth__link">
            Регистрация
          </Link>
        </p>
      )}
    </section>
  );
}

export default memo(FormAuth);
