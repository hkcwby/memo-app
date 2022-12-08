import React from "react";

export default function Input(props){
    return <button onClick={props.onClick}value={props.value} type={props.type} disabled={props.disabled}>{props.children}</button>;
}