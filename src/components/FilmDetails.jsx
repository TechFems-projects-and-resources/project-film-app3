function FilmDetails({ film }) {
  return (
    <div className="film-details">
      <table>
        <tr>
          <th>Original Title</th>
          <td>{film.original_title}</td>
        </tr>
        <tr>
          <th>Original Title Romanised</th>
          <td>{film.original_title_romanised}</td>
        </tr>
        <tr>
          <th>Director</th>
          <td>{film.director}</td>
        </tr>
        <tr>
          <th>Producer</th>
          <td>{film.producer}</td>
        </tr>
        <tr>
          <th>Released on:</th>
          <td>{film.release_date}</td>
        </tr>
        <tr>
          <th>Running time</th>
          <td>
            {Number.parseInt(film.running_time / 60, 10)}h:
            {film.running_time % 60 < 10
              ? `0${film.running_time % 60}`
              : film.running_time % 60}
            m
          </td>
        </tr>
      </table>
    </div>
  );
};

export default FilmDetails