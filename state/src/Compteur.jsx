import { useState } from 'react';

//useState qui utilise les évènements comme onClique
function Compteur() {
  const [compte, setCompte] = useState(0);

  function incrementer() {
    setCompte(compte + 1);
  }

  //c'est ici on utilise onClique
  return (
    <div>
      <p>Vous avez cliqué {compte} fois.</p>

      <button onClick={incrementer}>Incrémenter</button>
    
</div>
  );
}

export default Compteur;
