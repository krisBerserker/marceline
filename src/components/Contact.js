import React from "react";


function Contact() {
  return (


<section className="container">

  <footer className="py-5">

  <h1 className="py-4 d-flex justify-content-center">Contacts</h1>

    <div className="row">
    <div className="col">
    <a className="link-dark" href="tel:680053180">
        <h5>Telephone</h5></a>
        <p>680053180</p>
      </div>
      <div className="col">
      <a className="link-dark" href="https://wa.me/680053180?text=Bonjour Marceline">
        <h5>Whatsapp</h5> </a>
      </div>
      <div className="col">
      <a className="link-dark" href="https://m.facebook.com/profile.php?id=100057182630832">
        <h5>Facebook</h5></a>
      </div>
      <div className="col">
      <a className="link-dark" href="https://mailto:teigrepaoline12@gmail.com">
        <h5>Email</h5></a>
      </div>
      <div className="col">
      <a className="link-dark" href="https://vymaps.com/CM/Dschang-ecole-Marceline-101993338253098/">
        <h5>Localisation</h5> </a>
      </div>

      <div className="col-md-5 offset-1">
        <form>
          <h5>Se preinscrire</h5>
          <p>Preinscrivez vous des maintenant et profitez de reductions.</p>
          <div className="d-flex w-100 gap-2">
            <input id="newsletter1" type="text" className="form-control" placeholder="Nom de l'eleve" />
            <button className="btn btn-primary" type="button">Preinscription</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; 2023 Marceline, Inc. All rights reserved.</p>
    </div>
  </footer>
</section>


//     <footer id="contact">
//       <div>
//         <h3>Nous Contacter</h3>
//         <ul>
//           <li>
//             <a href="https://wa.me/680053180?text=Bonjour Marceline">
//               Whatsapp
//             </a>
//           </li>
//           <li>
//             <a href="tel:680053180">Telephone</a>
//           </li>
//           <li>
//             <a href="https://m.facebook.com/profile.php?id=100057182630832">
//               Facebook
//             </a>
//           </li>
//           <li>
//             <a href="https://mailto:teigrepaoline12@gmail.com">Email</a>
//           </li>
//           <li>
//             <a href="https://vymaps.com/CM/Dschang-ecole-Marceline-101993338253098/">
//               Localisation
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <NavLink to='/gestion'> Gestion </NavLink>
//       </div>
// <div>
//     <p className="float-end"><a href="#">Back to top</a></p>
//     <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
//     </div> 
//     </footer>
  );
}

export default Contact;
