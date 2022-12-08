import React from "react";

export default function MemoList(props){
    return <ul>
        {props.data.map(item=>
            <li key={item.id}  onClick={()=>props.onMemoClick(item.id)}>
                {item.title}
                </li>)}
    </ul>;
}