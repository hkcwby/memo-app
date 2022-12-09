import React from "react";
import Button from "../baseComponents/Button.js";
import Input from "../baseComponents/Input.js";
import TextArea from "../baseComponents/TextArea.js";


export default function RightPanel(props){

    return (<>
        <div id="right-page" className="split">
            <h2>Memo Detail</h2>
            <form id="memo-form" onSubmit={props.onSubmit}>
                <Input className="" size="50" name="Title" id="formTitle" placeholder="Enter Title" value={props.title} onChange={props.onChangeTitle}></Input>
                <br></br>
                <TextArea placeholder="Enter Details" name="Details" id="formDetails" rows="20" cols="70" value={props.detail} onChange={props.onChangeDetail}></TextArea>
                <div id="validation" className="right">{props.validation}</div>
                <Button id="save"  className="" type="submit">Save</Button>
            </form>

        </div>
    </>);    


}