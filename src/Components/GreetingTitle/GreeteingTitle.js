import "./GreetingTitle.css";

function GreeteingTitle({ title, place }) {
  return (
    <h1
      className={`greeteing-title ${
        place === "edit-profile" ? "greeteing-title_edit-profile" : ""
      }`}
    >
      {title}
    </h1>
  );
}

export default GreeteingTitle;