import React from "react";

export default function Input(props){
    return <button className={`ui-button ${props.className}`} onClick={props.onClick}value={props.value} type={props.type} disabled={props.disabled}>{props.children}</button>;
}