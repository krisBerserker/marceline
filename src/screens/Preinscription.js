import React from "react";
import NavBar from "../components/NavBar";
import { Component } from "react";

class Preinscription extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      message:"",
      classe:"",
       nom:"",
       prenom:"",
       date:"",
       lieuNais:"",
       lieuResi:"",
       sexe:"",
       autre:"",
       nomP:"",
       proP:"",
       telP:"",
       mailP:"",
       villeP:"",
       nomM:"",
       proM:"",
       telM:"",
       mailM:"",
       villeM:""
    };

  }

  handleChangeNom = (event) => {
    this.setState({ nom: event.target.value });
  };
  handleChangeClasse = (event) => {
    this.setState({ classe: event.target.value });
  };
  handleChangePrenom = (event) => {
    this.setState({ prenom: event.target.value });
  };
  handleChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };
  handleChangeLieuNais = (event) => {
    this.setState({ lieuNais: event.target.value });
  };
  handleChangeLieuResi = (event) => {
    this.setState({ lieuResi: event.target.value });
  };
  handleChangeSexe = (event) => {
    this.setState({ sexe: event.target.value });
  };
  handleChangeAutre = (event) => {
    this.setState({ autre: event.target.value });
  };
  handleChangeNomM = (event) => {
    this.setState({ nomM: event.target.value });
  };
  handleChangeProM = (event) => {
    this.setState({ proM: event.target.value });
  };
  handleChangeTelM = (event) => {
    this.setState({ telM: event.target.value });
  };
  handleChangeMailM = (event) => {
    this.setState({ mailM: event.target.value });
  };
  handleChangeVilleM = (event) => {
    this.setState({ villeM: event.target.value });
  };
  handleChangeNomP = (event) => {
    this.setState({ nomP: event.target.value });
  };
  handleChangeProP = (event) => {
    this.setState({ proP: event.target.value });
  };
  handleChangeTelP = (event) => {
    this.setState({ telP: event.target.value });
  };
  handleChangeMailP = (event) => {
    this.setState({ mailP: event.target.value });
  };
  handleChangeVilleP = (event) => {
    this.setState({ villeP: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({message:<p>votre nom est {this.state.nom} {this.state.prenom}, nee le : {this.state.date} a {this.state.lieuNais}  vous souhaitez vous inscrire en classe de {this.state.classe} <br/> votre mere est : {this.state.nomM} {this.state.proM} et vous vivez a {this.state.lieuResi}</p>})
    event.preventDefault();
  }

  render () {
  return (
    <section>
                  <NavBar/>
                  
                  <div class="container">
              <main>
                <div class="py-5 text-center">
                  <img class="d-block mx-auto mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                  <h2>Formulaire de preinscription</h2>
                  <p class="lead"> Rassurez vous de rentrer des information correctes</p>
                  </div>

                <div class="row d-flex justify-content-center">
                  
                  <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Renseignements personnels</h4>
                    <form onSubmit={this.handleSubmit} class="needs-validation" novalidate>
                      <div class="row g-3">
                        <div class="col-sm-6">
                          <label for="firstName" class="form-label">Noms </label>
                          <input onChange={this.handleChangeNom} type="text" class="form-control" id="firstName" placeholder="" value={this.state.nom} required />
                          <div class="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Prenoms</label>
                          <input onChange={this.handleChangePrenom} type="text" class="form-control" id="lastName" placeholder="" value={this.state.prenom} required />
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <label for="firstName" class="form-label">Date de Naissance </label>
                          <input onChange={this.handleChangeDate} type="date" class="form-control" id="firstName" placeholder="" value={this.state.date} required />
                          <div class="invalid-feedback">
                            Valid date is required.
                          </div>
                        </div>

                        <div class="col-sm-4">
                          <label for="firstName" class="form-label">Lieu de Naissance </label>
                          <input onChange={this.handleChangeLieuNais} type="text" class="form-control" id="firstName" placeholder="" value={this.state.lieuNais} required />
                          <div class="invalid-feedback">
                            Valid lieu de Naissance is required.
                          </div>
                        </div>
                        
                        <div class="col-sm-4">
                        <label for="radio" class="form-label">Sexe</label>

                        <div class="form-check">
                          <select value={this.state.sexe} onChange={this.handleChangeSexe} id="sexe" name="sexe" class="form-select-input">
                            <option value="masculin">
                              Masculin
                            </option>
                            <option value="feminin">
                              Feminin
                            </option>
                          </select>
                        </div>
                        </div>
                        
                        <div class="col-sm-4">
                        <label for="radio" class="form-label">Classe souhaitee</label>

                        <div class="form-check">
                          <select value={this.state.classe} onChange={this.handleChangeClasse} id="sexe" name="sexe" class="form-select-input">
                          <option value="pm">
                              Pre Maternelle
                            </option>
                            <option value="sil">
                              Sil
                            </option>
                            <option value="cp">
                              Cours Preparatoires
                            </option>
                            <option value="ce1">
                              Cours Elementaires 1
                            </option>
                            <option value="ce2">
                              Cours Elementaires 2
                            </option>
                            <option value="cm1">
                              Cours Moyens 1
                            </option>
                            <option value="cm2">
                              Cours Moyens 2
                            </option>
                          </select>
                        </div>
                        </div>

                        <div class="col-sm-4">
                          <label for="firstName" class="form-label">Lieu de residence (Quartier/Rue) </label>
                          <input onChange={this.handleChangeLieuResi} type="text" class="form-control" id="firstName" placeholder="" value={this.state.lieuResi} required />
                          <div class="invalid-feedback">
                            Valid lieu de residence is required.
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <label for="firstName" class="form-label">Autres (maladie/allergie/precision importante) </label>
                          <textarea onChange={this.handleChangeAutre} type="text" class="form-control" id="firstName" placeholder="" value={this.state.autre} required />
                          <div class="invalid-feedback">
                            Valid autre is required.
                          </div>
                        </div>

{/* Renseignements parents  */}
                        
                        <hr class="my-4" />

                        <h4 class="mb-3">Renseignements parents</h4>

                      <div class="row g-3">
                      <div class="col-sm-6">
                          <label for="firstName" class="form-label">Noms et prenoms de la mere </label>
                          <input onChange={this.handleChangeNomM} type="text" class="form-control" id="firstName" placeholder="" value={this.state.nomM} required />
                          <div class="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Noms et prenoms du pere</label>
                          <input onChange={this.handleChangeNomP} type="text" class="form-control" id="lastName" placeholder="" value={this.state.nomP} required />
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <label for="firstName" class="form-label">Profession de la mere </label>
                          <input onChange={this.handleChangeProM} type="text" class="form-control" id="firstName" placeholder="" value={this.state.proM} required />
                          <div class="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Profession du pere</label>
                          <input onChange={this.handleChangeProP} type="text" class="form-control" id="lastName" placeholder="" value={this.state.proP} required />
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Telephone de la mere</label>
                          <input onChange={this.handleChangeTelM} type="text" class="form-control" id="lastName" placeholder="" value={this.state.telM} required />
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Telephone du pere</label>
                          <input onChange={this.handleChangeTelP} type="text" class="form-control" id="lastName" placeholder="" value={this.state.telP} required />
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">email de la mere</label>
                          <input onChange={this.handleChangeMailM} type="email" class="form-control" id="lastName" placeholder="" value={this.state.mailM} required />
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">email du pere</label>
                          <input onChange={this.handleChangeMailP} type="email" class="form-control" id="lastName" placeholder="" value={this.state.mailP} required />
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Ville de residence de la mere</label>
                          <input onChange={this.handleChangeVilleM} type="text" class="form-control" id="lastName" placeholder="" value={this.state.villeM} required />
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <label for="lastName" class="form-label">Ville de residence du pere</label>
                          <input onChange={this.handleChangeVilleP} type="text" class="form-control" id="lastName" placeholder="" value={this.state.villeP} required />
                          <div class="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>


                        </div>
</div>
                      <hr class="my-4" />

                      <div>
                        {this.state.message}
                      </div>

                      <button class="w-100 btn btn-primary btn-lg" type="submit">Confirmer</button>
                    </form>
                  </div>
                </div>
              </main>

              <footer class="my-5 pt-5 text-muted text-center text-small">
                <p class="mb-1">&copy; 2020–2023 Marceline</p>
                <ul class="list-inline">
                  <li class="list-inline-item"><a href="#">Privacy</a></li>
                  <li class="list-inline-item"><a href="#">Terms</a></li>
                  <li class="list-inline-item"><a href="#">Support</a></li>
                </ul>
              </footer>
            </div>
    </section>
  );
}
}

export default Preinscription;
