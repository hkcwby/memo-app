import React from "react";
import Button from "./Button"

export default function MemoList(props){
    return <ul>
        {props.data.map(item=>
            <li key={item.id} onClick={()=>props.onMemoClick(item.id)}>
                {item.title}
                <Button className="btn-outline btn-delete" onClick={() => props.onDeleteClick(item.id)}>X</Button>
                </li>)}
    </ul>;
}
