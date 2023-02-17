import React, { useState } from 'react'

export default function Textform(props) {
    const handleUppercaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // const [text, setText] = useState("Enter Text here");
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'light' ? 'white' : '#04023a', color : props.mode === 'light' ? 'black' : 'white' }} id="myInputTextArea" rows="12"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUppercaseClick}>Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLowercaseClick}>Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear
                </button>
            </div>
            <div className="container my-3" style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(" ").length} Words and {text.length} Characters</b></p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your Text in the Text Area above to Preview it here"}</p>
            </div>
        </>
    )
}
















