import './SideMenu.css';

import Overlay from '../Overlay/Overlay';
import AccountBtn from '../AccountBtn/AccountBtn';
import Navigation from '../Navigation/Navigation';

function SideMenu({ isSideMenuOpen, onClose }) {
  return (
    <Overlay isActive={isSideMenuOpen} onClose={onClose}>
      <div
        className={`side-menu ${
          isSideMenuOpen ? 'side-menu_active_active' : ''
        }`}
      >
        <button
          className="side-menu__btn-close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <Navigation isMenuOpen={true} onClose={onClose} />
        <AccountBtn isMenuOpen={true} onClose={onClose} />
      </div>
    </Overlay>
  );
}

export default SideMenu;
