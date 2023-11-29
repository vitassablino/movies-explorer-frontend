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
    isFormValid,
    buttonText,
    children,
    ...otherProps
  } = props;
  return (
    <section className="form-auth">
      <Logo place="auth" />
      <GreetingTitle title={title} />
      <Form
        name={name}
        onSubmit={onSubmit}
        isFormValid={isFormValid}
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
          Ещё не зарегистрированы?{' '}
          <Link to="/signup" className="form-auth__link">
            Регистрация
          </Link>
        </p>
      )}
    </section>
  );
}

export default memo(FormAuth);
