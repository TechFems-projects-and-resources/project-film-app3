import { useState } from "react";
import FilmDetails from "./FilmDetails";

function Film({ film }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="film">
      <span>
        Name: <b>{film.title}</b>
      </span>
      <p>{film.description}</p>
      {isExpanded && <FilmDetails film={film} />}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Hide extra Info" : "Show extra Info"}
      </button>
    </div>
  );
}

export default Film