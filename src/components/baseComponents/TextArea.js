import React from "react";

export default function TextArea(props){
    const {placeholder,name,...rest} = props
    return <textarea className={`ui-textfield ${props.className}`} id={props.id} placeholder={props.placeholder} name={props.name} {...rest}></textarea>;
}