import  useFormValidation from "../utils/useFormValidation";
import "./User.css";
import Form from "../Form/Form";
import GreeteingTitle from "../GreetingTitle/GreeteingTitle";

import { REG_EXP } from "../../utils/constants.js";


function User({User, onLoading }) {
  
  const { values, errors, isFormValid, onChange } = useFormValidation();



function handleSubmit(e) {
  console.log("onSubmit")
  e.preventDefault();
}
    return (
    <main className="user">
      <section className="user__wrapper">
        <GreeteingTitle
          title={`Привет, Виктор!`}
          form="user-edit"
        />
        <Form
          name="user-edit"
          onSubmit={handleSubmit}
          isFormValid={isFormValid}
          buttonText={onLoading ? "Сохранение..." : "Сохранить"}
          
        >
          <label className="form__input-wrapper form__input-wrapper_user-edit">
            Имя
            <input
              className={`form__input form__input_user-edit ${
                errors.name ? "form__input_style_error" : ""
              }`}
              type="text"
              name="name"
              form="user-edit"
              required
              minLength="2"
              maxLength="30"
              pattern={REG_EXP}
              id="name-input"
              disabled={!onLoading ? false : true}
              onChange={onChange}
              value={values.name || "testname"}
            />
          </label>
          <label className="form__input-wrapper form__input-wrapper_user-edit">
            E-mail
            <input
              className={`form__input form__input_user-edit ${
                errors.email ? "form__input_style_error" : ""
              }`}
              type="text"
              name="email"
              form="user-edit"
              required
              id="email-input"
              disabled={!onLoading ? false : true}
              onChange={onChange}
              value={values.email || "testmail@mail.ru"}
            />
            
  
             
          </label>
          <div
            className={`form__errors-wrapper ${
              errors.name || errors.email ? "form__errors-wrapper_active" : ""
            }`}
          >
            <div className="form__error-wrapper">
              <p
                className={`form__error-name ${
                  errors.name ? "form__error-name_active" : ""
                }`}
              >
                Имя:
              </p>
              <span
                className={`form__input-error form__input-error_user-edit ${
                  errors.name ? "form__input-error_active" : ""
                }`}
              >
                {errors.name || ""}
              </span>
            </div>
            <div className="form__error-wrapper">
              <p
                className={`form__error-name ${
                  errors.email ? "form__error-name_active" : ""
                }`}
              >
                E-mail:
              </p>
              <span
                className={`form__input-error form__input-error_user-edit ${
                  errors.email ? "form__input-error_active" : ""
                }`}
              >
                {errors.email || ""}
              </span>
            </div>
          </div>
        </Form>
        <div
          className={`user__btns-wrapper`}
        >
          <button
            className="user__btn user__btn_edit hover-link"
            type="button"
          >
            Редактировать
          </button>
          <button
            className="user__btn user__btn_exit hover-link"
            type="button"
          >
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </main>
  );
}

export default User;