import "./GreetingTitle.css";

function GreeteingTitle({ title, place }) {
  return (
    <h1
      className={`greeteing-title ${
        place === "user-edit" ? "greeteing-title_user-edit" : ""
      }`}
    >
      {title}
    </h1>
  );
}

export default GreeteingTitle;