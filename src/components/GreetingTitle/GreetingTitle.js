import './GreetingTitle.css';
import { memo } from 'react';

function GreetingTitle({ title, place }) {
  return (
    <h1
      className={`greeteing-title ${
        place === 'user' ? 'greeteing-title_place_user-edit' : ''
      }`}
    >
      {title}
    </h1>
  );
}

export default memo(GreetingTitle);
