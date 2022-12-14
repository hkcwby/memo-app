import './App.css';
import LeftPanel from "./components/structureComponents/LeftPanel.js"
import RightPanel from "./components/structureComponents/RightPanel.js"
import {useState, useEffect} from "react";
import firebase from "./firebase.js";



function App() {
  const ref = firebase.firestore().collection("memos");
  //the memo data as stored in the database, in this case we are just using a dummy file to represent our database
  const [memos,setMemos] = useState([]);
  //useState variable for both the title and detail of our present memo shown on the right panel
  const [title,setTitle] = useState("");
  const [detail,setDetail] = useState("");
  //a counter for creating new unique memo id
  const [counter,setCounter] = useState(0);
  //a tracking variable to keep track of the current memo based on its unique id
  const [tracking,setTracking] = useState(0);
  //set a validation variable to catch errors and provide user feedback
  const [validation,setValidation] = useState("");

  // a function to grab the initial data stored in the firestore database
  
  function getMemosDB(){
    ref.onSnapshot((querySnapshot)=>{
      const items=[];
      querySnapshot.forEach((doc)=>{
        items.push(doc.data());
      })
      setMemos(items);
      setCounter(items[items.length-1].id +1);
      setTracking(items[items.length-1].id +1);
    })
  }

   //load the data once after mounting

   useEffect(()=>{
    getMemosDB();
  },[]);

  

//a function to display relevant memo information(right panel) when memo item clicked(leftpanel)
  function handleMemoClick(id){
    //setTracking(id);
    const item = memos.filter(memo=>memo.id==id);
    setTracking(item[0].id);
    setTitle(item[0].title);
    setDetail(item[0].detail);
    document.getElementById("formDetails").value=detail;
    
  }

//a function to remove a memo from storage
  function handleDeleteClick(id) {
    ref.doc(String(id)).delete();
}

//update the stored title of the memo as it is typed
function handleTitleChange(e){
  setTitle(e.target.value);
}
//update the stored detail of the memo as it is typed
function handleDetailChange(e){
  setDetail(e.target.value);
}

async function setMemoByID(memoID,memoDataObject){
  //example data for the first memo in the database
  //ref.doc("0").set({title:"title of the first memo",id:0,detail:"details of the first memo"})
  await ref.doc(memoID).set(memoDataObject);
}

function handleMemoSubmit(event){
  event.preventDefault();
  if(!title){
    setValidation("Please enter a Title");
    return;
  }
  if(!detail){
    setValidation("Please enter some details");
    return;
  }

  if(memos.length>=10){
    setValidation("limit of 10 memos for demonstrative purposes");
    return;
  }
  

  setMemoByID(String(tracking),{title:title,id:tracking,detail:detail}).then(()=>
  {
    setTitle("");
    setDetail("");
    setValidation("");
  })
}

//a function to generate a clean memo for submission with a rudimentary unique id system
function handleComposeClick(){
  setTracking(counter);
  setTitle("");
  setDetail("");
  document.getElementById("formDetails").value=detail;
}

  
  return (
    <div className="App">
      <header className="App-header">
      <h2>Simple Memo Task App Mockup (no backend)</h2>
      </header>
      <div id = "wrapper">
        <LeftPanel data={memos} onMemoClick={handleMemoClick} onDeleteClick={handleDeleteClick} onComposeClick={handleComposeClick}></LeftPanel>
        <RightPanel title={title} detail={detail} onSubmit={handleMemoSubmit} onChangeTitle={e=>handleTitleChange(e)} onChangeDetail={e=>handleDetailChange(e)} validation={validation}></RightPanel>
      </div>
    </div>
  );
}

export default App;


