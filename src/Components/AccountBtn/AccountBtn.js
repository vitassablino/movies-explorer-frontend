import { Link } from "react-router-dom";
import "./AccountBtn.css";

function AccountBtn({ isSideMenu, onClose }) {
	return (
		<Link
			to="/profile"
			onClick={onClose}
			className={`account-btn ${
				isSideMenu ? "" : "account-btn_hidden"
			} hover-button`}
		>
			Аккаунт
			<div className="account-icon"></div>
		</Link>
	);
}

export default AccountBtn;
