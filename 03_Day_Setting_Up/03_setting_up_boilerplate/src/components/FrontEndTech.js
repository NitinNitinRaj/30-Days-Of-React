import html from "../images/html_logo.png";
import css from "../images/css_logo.png";
import react from "../images/react_logo.png";

export default function FrontEndTech() {
  return (
    <div className="w-10/12 m-auto">
      <h1 className="text-center p-5 text-2xl font-bold">
        Front End Technologies
      </h1>
      <div className="flex justify-evenly p-10">
        <img className="h-56" src={html} alt="HTML" />
        <img className="h-56" src={css} alt="HTML" />
        <img className="h-56" src={react} alt="HTML" />
      </div>
    </div>
  );
}
