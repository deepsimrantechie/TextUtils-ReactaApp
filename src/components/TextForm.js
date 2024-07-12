import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleclearClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text clear !", "success");
  };
  const handleonChange = (event) => {
    //console.log("on change ");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log(" I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard ! ", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed !", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "light" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary  mx-2" onClick={handleUpClick}>
          ConverToUppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          ConverToLowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>
          clear all
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length}Minustes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter somethig to preview it here"}</p>
      </div>
    </>
  );
}
