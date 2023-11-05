import "./FormAuth.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import GreeteingTitle from "../GreetingTitle/GreeteingTitle";

function FormAuth({
  title,
  name,
  onSubmit,
  isFormValid,
  buttonText,
  ...props
}) {
  return (
    <section className="form-auth">
      <Logo place="auth" />
      <GreeteingTitle title={title} />
      <Form
        name={name}
        onSubmit={onSubmit}
        isFormValid={isFormValid}
        buttonText={buttonText}
      >
        {props.children}
      </Form>
      {name === "signup" ? (
        <p className="form-auth__text">
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="form-auth__link">
            Войти
          </Link>
        </p>
      ) : (
        <p className="form-auth__text">
          Ещё не зарегистрированы?{" "}
          <Link to="/signup" className="form-auth__link">
            Регистрация
          </Link>
        </p>
      )}
    </section>
  );
}

export default FormAuth;