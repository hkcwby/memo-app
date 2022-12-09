import React from "react";
import MemoList from "../baseComponents/MemoList";
import Button from "../baseComponents/Button"


export default function LeftPanel(props){
    return (<>
        <div id="left-page" className="split">
            <h2>Memos</h2>  
            <MemoList data={props.data} onMemoClick={props.onMemoClick} onDeleteClick={props.onDeleteClick}></MemoList>
            <Button  id="compose" onClick={props.onComposeClick} className="left">Compose</Button>
        </div>        
    </>);

    


}