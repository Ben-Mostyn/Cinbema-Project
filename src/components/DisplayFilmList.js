import React from "react";
import FilmData from "../data/films.json";
import FilmList from "./FilmList";
import "../css/filmList.css";

const DisplayFilmList = () => {
  //console.log(FilmData.films);

  return (
    <div className="filmListContainer">
      {FilmData.films.map((film, index) => {
        return (
          <FilmList
            title={film.title}
            synopsis={film.synopsis}
            showTimes={film.showtimes}
            ageCert={film.agecert}
            whatsOn={film.whatsOnSrcset}
          />
        );
      })}
    </div>
  );
};

export default DisplayFilmList;
