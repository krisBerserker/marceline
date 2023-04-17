import React from 'react'

function Feature() {
  return (
<section>
<hr className="featurette-divider" />

<div className="row featurette">
  <div className="col-md-5">
    <h2 className="featurette-heading">Des activites  <span className="text-muted">diverses et variees pour les rapprocher de leurs passions.</span></h2>
    <p className="lead">Au groupe scolaire Marceline Nos organisons des excursions.</p>
    
</div>
  <div className="col-md-7">
    <svg id="f-img-1" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title></svg>

  </div>
</div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading">Des Outils <span className="text-muted">pour faciliter l'apprentissage.</span></h2>
      <p className="lead">Au groupe scolaire bilingue Marceline vous trouverez une panoplie d'outils pour faciliter l'apprentissage.</p>
      <ul>
        <li>Didactiques</li>
        <li>Pedagogique</li>
        <li>informatique</li>
        <li>Technologique</li>
      </ul>  
  </div>
  <div className="col-md-5 order-md-1">
    <svg id="f-img-2" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="100%" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title></svg>

  </div>
</div>
</section>
    // <section className='features'>
    //         <FeatureBox image={outil} texte="Des outils divers et varies pour faciliter l'apprentissage et la comprehension. Des outils a la pointe de la technologie, pour s'accorder a leur environnement contemporain"/>
    //         <FeatureB image={activites} texte="Des activites multiples et variees pour les familiariser avec leur environnement et nourrir leur curuosite. Leurs permettre de decouvrir leurs passion tout en s'epanouissant dans un cadre securise et agreable"/>
    //         <FeatureBox image={squelette} texte="Des approches didactiques interactives et proactives, facilitant ainsi l'assimilation et la comprehension des notions dispensees"/>
    //         <FeatureB image={bwSchool} texte="Des ateliers de loisir et de divertissements pour permettre a nos enfants de s'amuser tout en apprenant"/>
    // </section>
  )
}

export default Feature