import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        // setText("you are clicked on covert");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to upper case", "success");
    }

    const handleLoClick = () => {
        // setText("you are clicked on covert");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to lower case", "success");

    }

    const handleOnChange = (event) => {
        // console.log("you are clicked on text");
        setText(event.target.value);
    }

    const handleClearClick = (event) => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");

    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        const toggle = document.getElementById("toggle");
        if (toggle.textContent === "Speak") {
            toggle.innerHTML = "Stop";
            toggle.style.backgroundColor = "red";
        }
        else {
            window.speechSynthesis.cancel();
            toggle.innerHTML = "Speak";
            toggle.style.backgroundColor = "#0d6efd";
        }
    }

    const handleCopy = () => {
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");
    }

    // function lengthOfWord() {
    //     let count = 0
    //     for (let i = 0; i < text.split(" ").length; i++) {
    //         if (text.split(" ")[i] === "") {
    //             count++;
    //         }
    //     }
    //     return text.split(" ").length - count
    // }



    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} placeholder={"Enter the text here"} style={{ backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode === "dark" ? "white" : "black" }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>clear</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Handle Extra Spaces</button>
                {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button> */}
                <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2" id='toggle'>Speak</button>
            </div>

            <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>Your Text Summary</h1>

                {text.split(/\s+/).filter((word) => word !== "").length} words and {text.length} characters

                {/* <p>{lengthOfWord()} words & {text.length} characters</p> */}

                {/* <p>{text.split(' ').length - 1} words & {text.length} characters</p> */}

                {/* <p>{text.split(" ").length > 1 ? text.split(" ").length - 1 : 0} words and {text.length} charecters </p> */}

                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text above to preview it here"}</p>
            </div>
        </>
    )
}