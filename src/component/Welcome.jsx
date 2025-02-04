import Eta from "./Eta";
function Welcome({ name, age }) {
  return (
    <div>
      <h1>
        Welcome, <strong>{name}</strong>
      </h1>
      <p>
        <Eta age={age} />
      </p>
    </div>
  );
}

export default Welcome;

// Creo il componente welcome passo come props nome e anni e ritorno il nome
// Creo il componente eta passo come props age  e ritorno il testo e age
// nel componente welcome importo eta e passo a età, age
// e poi passo tutto ad app
