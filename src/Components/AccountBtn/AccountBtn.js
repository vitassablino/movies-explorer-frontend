import { Link } from "react-router-dom";
import "./AccountBtn.css";

function AccountBtn({ isMenuOpen, onClose }) {
	return (
		<Link
			to="/user"
			onClick={onClose}
			className={`account-btn ${
				isMenuOpen ? "account-btn_side-menu" : "account-btn_hidden"
			}`}
		>
			Аккаунт
			<div className="account-icon"/>
		</Link>
	);
}

export default AccountBtn;
