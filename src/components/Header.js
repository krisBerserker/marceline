import React from "react";

function Header() {
  return (
    <section id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg
            id="carousel1"
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            {" "}
          </svg>

          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Une ecole qui fait la difference.</h1>
              <p>
                L'ecole MARCELINE proposes des activites qui rapprochent les
                enfants de leurs passions.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Se preinscrire
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg
            id="carousel2"
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            {" "}
          </svg>

          <div className="container">
            <div className="carousel-caption">
              <h1>Une ecole de reference.</h1>
              <p>
                L'ecole MARCELINE est la reference en matiere d'education et
                d'enseignement.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  En savoir plus
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg
            id="carousel3"
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            {" "}
          </svg>

          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Un cadre ideal.</h1>
              <p>
                Des outils et un personnel devoue a la reussite de chaque
                enfant.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>

    // <header className="header">

    //   <div className="header-content">
    //     <h1 className="header-title"> Groupe scolaire bilingue <span>MARCELINE</span> </h1>
    //     <p className="header-text"> Le choix ideal pour une education et un encadrement de <span>qualite</span></p>
    //     <button className="header-btn"> CONTACT </button>
    //   </div>
    // </header>
  );
}

export default Header;
