import './App.css';
import LeftPanel from "./components/structureComponents/LeftPanel.js"
import RightPanel from "./components/structureComponents/RightPanel.js"
import {data} from "./dataDummy.js";



function App() {

  
  return (
    <div className="App">
      <header className="App-header">
      <h2>Simple Memo Task App Mockup (no backend)</h2>
      </header>
      <div id = "wrapper">
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
      </div>
    </div>
  );
}

export default App;


