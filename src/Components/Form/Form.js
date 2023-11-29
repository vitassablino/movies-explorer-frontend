import './Form.css';
import { memo } from 'react';

function Form(props) {
  const {
    name,
    onSubmit,
    isValid,
    isCurrentUser,
    buttonText,
    isTyping,
    children,
    ...otherProps
  } = props;

  /* Обработчик отключения кнопки */
  function handleDisableButton() {
    if (name === 'user-edit') {
      return !(isValid && !isCurrentUser);
    } else {
      return !isValid;
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
      {children}
      <button
        type="submit"
        form={`${name}`}
        className={`form__submit-btn form__submit-btn_${name} ${
          name === 'user-edit' && !isTyping
            ? 'form__submit-btn_hidden'
            : ''
        }`}
        disabled={handleDisableButton()}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default memo(Form);
