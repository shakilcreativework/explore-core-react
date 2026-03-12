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
      <Salami event={'Roja'} amount={5000} />
      <Salami event={'Rufaida'} amount={10000} />
    </>
  );
}

function Salami({event, amount}){
  console.log(event, amount);
  return(
    <div>
      <p>Salami For: {event}</p>
      <p>Amount: {amount} tk</p>

      <p>Salami For: {event}</p>
      <p>Amount: {amount} tk</p>
    </div>
  );
};

function Person() {
  const age = 21;
  const name = "kallu";
  return(
    <p>I am a person name {name} age {age}</p>
  );
};

export default App;
