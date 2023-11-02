import { Link } from "react-router-dom";
import "./AccountBtn.css";

function AccountBtn({ isMenuOpen, onClose }) {
	return (
		<Link
			to="/profile"
			onClick={onClose}
			className={`account-btn ${
				isMenuOpen ? "account-btn_side-menu" : "account-btn_hidden"
			}`}
		>
			Аккаунт
			<div className="account-icon"></div>
		</Link>
	);
}

export default AccountBtn;
