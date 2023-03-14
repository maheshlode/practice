import React, { useState } from "react";

function TextForm(props) {

    const handleUpperCase = () => {
        //console.log("Uppercase button clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }

    const handleLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success")
    }

    // function to reverse the given text
    const reverseString=()=>{
        let newText=text.split("");
        let reverseStr=newText.reverse("");
        let joinStr=reverseStr.join("");
        let newReverseText=joinStr;
        //let newText=text.split("").reverse("").join("");
        setText(newReverseText);
    }

    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success")
    }
    const clearText=()=>{
        setText('');
        props.showAlert("Text cleared!","success")
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value)
    }


    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <div className="form-group my-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={reverseString}>Reverse Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>your text summary</h1>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{0.008 * text.split(" ").length} minutes to read the upper paragraph</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Text Box is Empty"}</p>
            </div>

        </>
    );
}

export default TextForm;