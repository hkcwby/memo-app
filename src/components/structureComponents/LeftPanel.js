import React from "react";
import MemoList from "../baseComponents/MemoList";


export default function LeftPanel(props){
    return (<>
        <div id="left-page" className="split">
            <h2>Memos</h2>  
            <MemoList data={props.data} onMemoClick={props.onMemoClick}></MemoList>
            
        </div>        
    </>);

    


}