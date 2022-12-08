import React from "react";

export default function TextArea(props){
    const {placeholder,name,...rest} = props
    return <textarea id={props.id} placeholder={props.placeholder} name={props.name} {...rest}></textarea>;
}