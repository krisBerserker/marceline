import React from "react";
import { Component } from "react";

class Gestion extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
     
    };

  }

  render () {
  return (
    <div>
      <header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark d-flex">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Marceline</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100" type="text" placeholder="Rechercher" aria-label="Search" />
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <a class="nav-link px-3" href="#">Sign out</a>
    </div>
  </div>
</header>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              Tableau de bord
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file"></span>
              Eleves
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              Enseignants
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="users"></span>
              Classes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Transport
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              autre Personnel
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span> Gestion </span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Etats financiers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Notifications
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Tableau de bord</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>


      <div class="container px-4 py-5" id="featured-4">
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
    <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use href="#collection"/></svg>
        </div>
        <h2>375 Eleves </h2>
        <p>120 insolvables</p>
        <a href="#" class="icon-link">
          Ajouter un eleve
          <svg class="bi" width="1em" height="1em"><use href="#chevron-right"/></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use href="#collection"/></svg>
        </div>
        <h2>20 Enseignants</h2>
        <p>12 femmes </p>
        <p>8 hommes</p>
        <a href="#" class="icon-link">
          Ajouter un Enseignants
          <svg class="bi" width="1em" height="1em"><use href="#chevron-right"/></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use href="#people-circle"/></svg>
        </div>
        <h2>07 Classes</h2>
        <a href="#" class="icon-link">
          Gerer les classes
          <svg class="bi" width="1em" height="1em"><use href="#chevron-right"/></svg>
        </a>
      </div>
      <div class="feature col">
        <div class="feature-icon bg-primary bg-gradient">
          <svg class="bi" width="1em" height="1em"><use href="#toggles2"/></svg>
        </div>
        <h2> 10 Bus </h2>
        <p>08 En Etat</p>
        <p>02 En Panne</p>
        <a href="#" class="icon-link">
          Gerer les bus
          <svg class="bi" width="1em" height="1em"><use href="#chevron-right"/></svg>
        </a>
      </div>
    </div>
  </div>


      <h2>Liste des eleves</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col"> Matricule</th>
              <th scope="col">Nom et prenom</th>
              <th scope="col">classe</th>
              <th scope="col">transport</th>
              <th scope="col">pension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Abanda yves</td>
              <td>ce1</td>
              <td>oui</td>
              <td>70 000 / 150 000</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>Benoue Azaelle</td>
              <td>cm2</td>
              <td>non</td>
              <td>100 000 / 150 000</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Ymata claudion</td>
              <td>sil</td>
              <td>oui</td>
              <td>90 000 / 100 000</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Sala benoit</td>
              <td>cp</td>
              <td>oui</td>
              <td>100 000 / 150 000</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>Ysmael saidou</td>
              <td>cm1</td>
              <td>oui</td>
              <td>100 000 / 150 000</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>Mbogni Emeraude</td>
              <td>cm2</td>
              <td>oui</td>
              <td>100 000 / 150 000</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>Meriem Starla</td>
              <td>ce2</td>
              <td>oui</td>
              <td>100 000 / 150 000</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>togomo Leonidas</td>
              <td>ce1</td>
              <td>non</td>
              <td>100 000 / 100 000</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>text</td>
              <td>placeholder</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>visual</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>random</td>
              <td>tabular</td>
              <td>information</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>

	
	  </div>
  );
}
}

export default Gestion;
