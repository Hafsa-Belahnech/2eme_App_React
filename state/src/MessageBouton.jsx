import { useState } from 'react';

function MessageBouton() {
  const [message, setMessage] = useState('Cliquez sur le bouton');

  //evenement onClick (par clique sur le bouton)
  function changerMessage() {
    setMessage('Vous avez cliqué sur le bouton maintenant!');
  }

  return (
    <div>
      <p>{message}</p>

      <button onClick={changerMessage}>Cliquer</button>
    
</div>
  );
}

export default MessageBouton;
