import { useEffect, useState } from "react";
import Film from "./Film";
import Header from "./Header";

function Films() {
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
        setFilteredFilms(data);
      });
  }, []);

  return (
    <>
      <Header
        onChange={(value) =>
          setFilteredFilms(films.filter((item) => item.title.toLowerCase().startsWith(value.toLowerCase())))
        }
      />
      <div className="container">
        {filteredFilms.map((item) => (
          <Film film={item} />
        ))}
      </div>
    </>
  );
};

export default Films