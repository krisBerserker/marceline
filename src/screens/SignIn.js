import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'


class SignIn extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }


  render (){
  return (
    <main class="form-signin d-flex justify-content-center ">
    <NavBar/>

    <form className='signIn'>
      <img class="mb-4" src="../images/logo.png" alt="" width="72" height="57" />
      <h1 class="h3 mb-3 fw-normal">Connectez-vous pour continuer</h1>
  
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Nom d'utilisateur </label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Mot de passe</label>
      </div>
  
      <div class="checkbox mb-3">

        <label> Type d'utilisateur </label>
        <select>
          <option>
            Enseignant
          </option>
          <option>
            Gestionnaire
          </option>
          <option>
            Administrateur
          </option>

        </select>
      </div>
            
     <NavLink to='/gestion'>  <button class="w-100 btn btn-lg btn-primary" type="submit"> Sign in  </button></NavLink>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </main>
  )
}
}

export default SignIn