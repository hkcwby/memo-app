import React from "react";

export default function Input(props){

    return <input className={`ui-input ${props.className}`}  type={props.type?props.type:"text"}  value={props.value} placeholder={props.placeholder} name={props.name} size={props.size} onChange={props.onChange}></input>;
}