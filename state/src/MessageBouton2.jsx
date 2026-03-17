import { useState } from "react";

//clique avec changement de texte à chaque fois
function MessageBouton2() {
  const messages = ["Premier clic", "Deuxième clic", "Troisième clic"];
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div>
      <h2>{messages[index]}</h2>
      <button onClick={handleClick}>Cliquer</button>
    </div>
  );
}

export default MessageBouton2;
