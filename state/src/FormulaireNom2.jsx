import { useState } from "react";

function FormulaireNom2() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Prénom: ${prenom} | Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom :</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>

      <div>
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireNom2;