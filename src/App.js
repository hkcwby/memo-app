import './App.css';
import LeftPanel from "./components/structureComponents/LeftPanel.js"
import RightPanel from "./components/structureComponents/RightPanel.js"
import {data} from "./dataDummy.js";
import { useState } from "react";



function App() {
  //the memo data as stored in the database, in this case we are just using a dummy file to represent our database
  const [memos,setMemos] = useState(data);
  //useState variable for both the title and detail of our present memo shown on the right panel
  const [title,setTitle] = useState("");
  const [detail,setDetail] = useState("");
  //a counter for creating new unique memo id
  const [counter,setCounter] = useState(data.length+1);
  //a tracking variable to keep track of the current memo based on its unique id
  const [tracking,setTracking] = useState(counter);

  
  return (
    <div className="App">
      <header className="App-header">
      <h2>Simple Memo Task App Mockup (no backend)</h2>
      </header>
      <div id = "wrapper">
        <LeftPanel data={memos} ></LeftPanel>
        <RightPanel></RightPanel>
      </div>
    </div>
  );
}

export default App;


