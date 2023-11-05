import useFormValidation from "../../utils/useFormValidation";
import "./User.css";
import Form from "../Form/Form";
import GreeteingTitle from "../GreetingTitle/GreeteingTitle";

import { REG_EXP } from "../../utils/constants.js";

function User({ User }) {
	const { values, errors, isFormValid, onChange } = useFormValidation();

	function handleSubmit(e) {
		console.log("onSubmit");
		e.preventDefault();
	}
	return (
		<main className="user">
			<section className="user__wrapper">
				<GreeteingTitle title={`Привет, Виктор!`} place="user" />
				<Form
					name="user-edit"
					onSubmit={handleSubmit}
					isFormValid={isFormValid}
					buttonText="Сохранить"
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
							onChange={onChange}
							value={values.name || "testname"}
						/>
            <span
            className={`form__input-error ${
              errors.name ? "form__input-error_active" : ""
            }`}
          >
            {errors.name || ""}
          </span>
					</label>
					<label className="form__input-wrapper form__input-wrapper_user-edit">
						E&minus;mail:
						<input
							className={`form__input form__input_user-edit ${
								errors.email ? "form__input_style_error" : ""
							}`}
							type="text"
							name="email"
							form="user-edit"
							required
							id="email-input"
							onChange={onChange}
							value={values.email || "testmail@mail.ru"}
						/>
            <span
								className={`form__input-error form__input-error_user-edit ${
									errors.email ? "form__input-error_active" : ""
								}`}
							>
								{errors.email || ""}
							</span>
					</label>
					<div
						className={`form__errors-wrapper ${
							errors.name || errors.email ? "form__errors-wrapper_active" : ""
						}`}
					>

					</div>
				</Form>
				<div className={`user__btns-wrapper`}>
					<button className="user__btn user__btn_edit" type="button">
						Редактировать
					</button>
					<button className="user__btn user__btn_exit" type="button">
						Выйти из аккаунта
					</button>
				</div>
			</section>
		</main>
	);
}

export default User;
