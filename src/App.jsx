import "./App.css";
import ToDo from "./ToDo";

function App() {
  return (
    <>
      <h2>Hello, react</h2>
      <ToDo task="Task complete of Dom" />
      <Salami event={'Shakil'} amount={5000} />
    </>
  );
}

function Salami({event, amount}){
  console.log(event);
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
