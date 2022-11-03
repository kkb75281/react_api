import React from "react";

function MovieBox(props) {
  return <div>{props.id}</div>;
}

function MovieCont(props) {
  //   console.log({ movies });
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__inenr">
          <div className="movie__box">
            {/* {props.movies.map((movie, idx) => {
              <MovieBox key={idx} movie={movie} />;
            })} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieCont;
