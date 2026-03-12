import "./App.css";

function App() {
  return (
    <>
      <h2>Hello, react</h2>
      <Person/>
      <Person/>
      <Person/>
      <Person/>
      <Person/>
    </>
  );
}

function Person() {
  const age = 21;
  const name = "kallu";
  return(
    <p>I am a person name {name} age {age}</p>
  );
};

export default App;
