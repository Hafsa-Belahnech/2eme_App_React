import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import MessageBouton2 from './MessageBouton2';
import FormulaireNom from './FormulaireNom';
import FormulaireNom2 from './FormulaireNom2';
import CompteurEffet from './CompteurEffet';


//ici on affiche ces élèments
function App() {
  return (
    <div>
      <Compteur />
      <MessageBouton /><br>
      </br>
      <FormulaireNom /><br>
      </br>
      <CompteurEffet />
      <MessageBouton2/><br>
      </br>
      <FormulaireNom2 />


    </div>
  );
}

export default App;
