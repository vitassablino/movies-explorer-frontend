import "./Form.css";

function Form({
  name,
  onSubmit,
  isFormValid,
  isCurrentUser,
  buttonText,
  isTyping,
  ...props
}) {
    /* Обработчик отключения кнопки */
  function handleDisableButton() {
    if (name === "user-edit") {
      return isFormValid && !isCurrentUser ? false : true;
    } else {
      return isFormValid ? false : true;
    }
  }

  return (
    <form
      action="#"
      name={`${name}`}
      id={`${name}`}
      className={`form form_place_${name}`}
      noValidate
      onSubmit={onSubmit}
    >
      {props.children}
      <button
        type="submit"
        form={`${name}`}
        className={`form__submit-btn form__submit-btn_${name} ${
          name === "user-edit" && !isTyping
            ? "form__submit-btn_hidden"
            : ""
        }`}
        disabled={handleDisableButton()}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default Form;