import { Link, useMatch } from 'react-router-dom';
import './AccountBtn.css';
import { AppRoutes } from '../../utils/configs/router';

function AccountBtn({ isMenuOpen, onClose }) {
  const isLanding = useMatch(AppRoutes.main);

  return (
    <Link
      to={AppRoutes.profile}
      onClick={onClose}
      className={`account-btn ${
        isMenuOpen ? 'account-btn_side-menu_opened' : 'account-btn_visible_hidden'
      }`}
    >
      Аккаунт
      <div className={`account-btn__icon ${isLanding && 'account-btn__icon_landing'}`} />
    </Link>
  );
}

export default AccountBtn;
