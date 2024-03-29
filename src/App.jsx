import { useState } from "react";
import Header from "../components/Header/Header";
import InputBlock from "../components/InputBlock/InputBlock";
import Output from "../components/Output/Output";
import "./App.css";

const App = () => {
  const [appState, setAppState] = useState(null);
  const handlePropsDrill = (obj) => {
    setAppState(obj);
  };
  return (
    <div className="App">
      <Header />
      <div className="App-divided">
        <InputBlock onGenerate={handlePropsDrill} />
        <Output params={appState} />
      </div>
    </div>
  );
};

export default App;
