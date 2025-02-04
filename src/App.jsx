import Welcome from "./component/Welcome";
function App() {
  return (
    <>
      <Welcome name="Camillo" age={25} />
      <Welcome name="John" age={70} />
      <Welcome name="Gionny" age={16} />
    </>
  );
}

export default App;
