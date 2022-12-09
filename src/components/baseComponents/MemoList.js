import React from "react";

export default function MemoList(props){
    return <ul>
        {props.data.map(item=>
            <li key={item.id} onClick={()=>props.onMemoClick(item.id)}>
                {item.title}
                <button className="btn-outline btn-delete" onClick={() => props.onDeleteClick(item.id)}>X</button>
                </li>)}
    </ul>;
}
