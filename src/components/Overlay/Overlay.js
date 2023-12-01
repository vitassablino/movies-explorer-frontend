import './Overlay.css';
import { memo } from 'react';

function Overlay({ isActive, onClose, ...props }) {

  const closeByClickOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`overlay ${isActive ? 'overlay_active_active' : ''}`}
      onMouseDown={closeByClickOnOverlay}
    >
      {props.children}
    </div>
  );
}

export default memo(Overlay);
