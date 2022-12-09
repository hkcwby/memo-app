import './App.css';
import LeftPanel from "./components/structureComponents/LeftPanel.js"
import RightPanel from "./components/structureComponents/RightPanel.js"
import {data} from "./dataDummy.js";
import {useState} from "react";



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

//a function to display relevant memo information(right panel) when memo item clicked(leftpanel)
  function handleMemoClick(id){
    setTracking(id);
    const item = memos.filter(memo=>memo.id==id);
    setTracking(item[0].id);
    setTitle(item[0].title);
    setDetail(item[0].content);
    document.getElementById("formDetails").value=detail;
    
  }

//a function to remove a memo from storage
  function handleDeleteClick(id) {
    setMemos(memos.filter(memo => memo.id !== id));
}

//update the stored title of the memo as it is typed
function handleTitleChange(e){
  setTitle(e.target.value);
  console.log(title);
  
}
//update the stored detail of the memo as it is typed
function handleDetailChange(e){
  setDetail(e.target.value);
  console.log(detail);

}
  
  return (
    <div className="App">
      <header className="App-header">
      <h2>Simple Memo Task App Mockup (no backend)</h2>
      </header>
      <div id = "wrapper">
        <LeftPanel data={memos} onMemoClick={handleMemoClick} onDeleteClick={handleDeleteClick}></LeftPanel>
        <RightPanel title={title} detail={detail} onChangeTitle={e=>handleTitleChange(e)} onChangeDetail={e=>handleDetailChange(e)}></RightPanel>
      </div>
    </div>
  );
}

export default App;


