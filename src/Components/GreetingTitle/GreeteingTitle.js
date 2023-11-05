import "./GreetingTitle.css";

function GreeteingTitle({ title, place }) {
  return (
    <h1
      className={`greeteing-title ${
        place === "user" ? "greeteing-title_user-edit" : ""
      }`}
    >
      {title}
    </h1>
  );
}

export default GreeteingTitle;