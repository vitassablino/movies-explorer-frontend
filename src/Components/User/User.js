import useFormValidation from '../../hooks/useFormValidation';
import './User.css';
import Form from '../Form/Form';
import GreetingTitle from '../GreetingTitle/GreetingTitle';
import Header from '../Header/Header';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useUserApi } from '../../hooks/useUserApi';
import { Loader } from '../Loader/Loader';

function User() {
  const [ fetchStatus, setFetchStatus ] = useState('');
  const { currentUser } = useContext(CurrentUserContext);
  const { values, setValues, errors, isValid, setIsValid, handleChange } = useFormValidation();
  const {
    handleUpdateUserData,
    handleLogout,
    isLoading,
    isError,
    errorMessage,
    isFulfilled,
    resetErrors,
  } = useUserApi();

  useEffect(() => {
    if (isError) setFetchStatus(errorMessage);

    if (isFulfilled) setFetchStatus('Профиль успешно обновлен!');

    setTimeout(() => setFetchStatus(''), 2000);
  }, [isError, isFulfilled]);

  useEffect(() => {
    if (isError) {
      setValues({
        name: currentUser.name, email: currentUser.email
      });
    }
  }, [ isError, setValues, currentUser ]);

  useEffect(() => {
    setIsValid(false);
    setValues({
      name: currentUser.name, email: currentUser.email
    });
  }, [ currentUser.email, currentUser.name, setIsValid, setValues ]);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) setIsValid(false);
  }, [ values, setIsValid, currentUser ]);

  const renderButtons = useCallback(() => {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <button className="user__btn user__btn_edit" disabled={!isValid} form="user-edit">
          Редактировать
        </button>
        <button className="user__btn user__btn_exit" type="button" onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      </>
    );
  }, [ isLoading, handleLogout, isValid ]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const { name, email } = values;
    handleUpdateUserData({ name, email });
    resetErrors();
  }, [ values, handleUpdateUserData ]);

  return (
    <>
      <Header />
      <main className="user">
        <section className="user__wrapper">
          <GreetingTitle title={`Привет, ${currentUser.name}!`} place="user" />
          <Form
            name="user-edit"
            onSubmit={handleSubmit}
            isFormValid={isValid}
            buttonText="Сохранить"
          >
            <label className="form__input-wrapper form__input-wrapper_user-edit">
              <input
                className={`form__input form__input_user-edit ${errors.name ? 'form__input_style_error' : ''}`}
                type="text"
                name="name"
                form="user-edit"
                required
                minLength="2"
                maxLength="30"
                id="name-input"
                onChange={handleChange}
                value={values.name ?? 'test'}
              />
              <span className="form__input-name">Имя</span>
            </label>
            <span className={`form__input-error form__input-error_type_bordered`}>
            {errors.name}
            </span>
            <label className="form__input-wrapper form__input-wrapper_user-edit">
              <input
                className={`form__input form__input_user-edit ${errors.email ? 'form__input_style_error' : ''}`}
                type="email"
                name="email"
                form="user-edit"
                required
                id="email-input"
                onChange={handleChange}
                value={values.email ?? 'testmail@mail.ru'}
              />
              <span className="form__input-name">E-mail</span>
            </label>
            <span
              className={`form__input-error form__input-error_user-edit`}
            >
			  {errors.email}
            </span>
            <div
              className="form__errors-wrapper"
            >
              <span
                className={`form__status ${isError ? 'form__status_type_error' : 'form__status_type_fulfilled'}`}>
                {fetchStatus}
              </span>
            </div>
            <div className={`user__btns-wrapper`}>
              {renderButtons()}
            </div>
          </Form>
        </section>
      </main>
    </>
  );
}

export default memo(User);
