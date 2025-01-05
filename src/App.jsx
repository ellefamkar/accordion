import "./App.css";
import Accordion from "./components/Accordion";
import AccordionOpen from "./components/AccordionOpen";

function App() {
  return (
    <div className="app">
      <h1>Accordion</h1>
      <div className="container">
        <Accordion />
        <AccordionOpen />
      </div>
    </div>
  );
}

export default App;
