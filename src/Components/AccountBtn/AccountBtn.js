import { Link, useLocation } from "react-router-dom";
import "./AccountBtn.css";

function AccountBtn({ isMenuOpen, onClose }) {
	const location = useLocation();
	return (
		<Link
			to="/user"
			onClick={onClose}
			className={`account-btn ${
				isMenuOpen ? "account-btn_side-menu_opened" : "account-btn_visible_hidden"
			}`}
		>
			Аккаунт
			<div className="account-icon"/>
		</Link>
	);
}

export default AccountBtn;
