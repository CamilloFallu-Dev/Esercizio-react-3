import Eta from "./Eta";
import Message from "./Message";
function Welcome({ name, age }) {
  return (
    <div>
      <h1>
        Welcome, <strong>{name}</strong>
      </h1>
      <p>
        <Eta age={age} />
      </p>
      <Message age={age} />
      <div className="flex gap-4 p-4 bg-blue-300 font-bold">
        {age > 18 && <Eta age={age} />}
        {age && <Eta age={age} />}
        {age > 18 && age < 65 && <Eta age={age} />}
        {age > 18 && name === "John" && <Eta age={age} />}
      </div>
    </div>
  );
}

export default Welcome;

// Creo il componente welcome passo come props nome e anni e ritorno il nome
// Creo il componente eta passo come props age  e ritorno il testo e age
// nel componente welcome importo eta e passo a età, age
// e poi passo tutto ad app
