import "./Textadd.css";
import React, { useState } from "react";

export default function Textadd() {
  let prevstyle = {
    color: "grey",
  };
  let orgstyle = {
    color: "rgb(217 164 133)",
  };
  let change_arrow_color = {
    color: "white",
  };

  const [text, settext] = useState("");
  const [readingspeedtime, setreadingspeedtime] = useState();

  // setprev(text);
  function convertup() {
    let convert_upper = text.toUpperCase();
    settext(convert_upper);
  }
  function convertlow() {
    let convert_lower = text.toLowerCase();
    settext(convert_lower);
  }
  function cleartext() {
    settext("");
  }
  function copytextcall() {
    navigator.clipboard.writeText(text);
  }
  // function convertoriginal() {
  //   settext(originaltexts);
  // }
  function onchange(e) {
    settext(e.target.value);
  }
  function averagespeed() {
    setreadingspeedtime(
      text.split(/\s+/).filter((e) => {
        return e.length !== 0;
      }).length * 0.005
    );
  }
  return (
    <>
      <div className="errorcontainer">{text}</div>
      <div className="textcontainer">
        <div className="texts">
          <h2 className="texthead">Enter Your Text</h2>
          <div className="inputtext">
            <i
              className="far fa-envelope input_logo"
              style={
                text.length === 0 ? { color: "black" } : { color: "white" }
              }
            ></i>
            <textarea
              name=""
              id="text_area"
              value={text}
              onChange={onchange}
              placeholder={"Type or paste your content here"}
              style={
                text.length === 0
                  ? { background: "#244a68" }
                  : { background: "black", color: "rgb(110, 179, 141)" }
              }
            ></textarea>
          </div>
        </div>
        <div className="previewbottom">
          <div className="preview">
            {/* <h2 id="preview_pre">Preview</h2> */}
            <textarea
              className={
                text.length === 0 ? "prevtext" : "prevtext prevcolorchanger"
              }
              style={
                text.length === 0
                  ? { background: "#042743" }
                  : { background: "black" }
              }
              id="previewtextarewidth"
              disabled
              placeholder={
                text.length !== 0 ? text : "Enter something to preview it here"
              }
            ></textarea>

            <div
              className={
                text.length !== 0 ? "copyicon" : "copyicon copyicon_displaynone"
              }
            >
              copy text
              <i
                className="fa fa-clone copyoicons"
                aria-hidden="true"
                onClick={copytextcall}
              ></i>
            </div>
          </div>

          <div className="buttons">
            <button className="btn up" onClick={convertup}>
              Change To UpperCase
            </button>
            <button className="btn low" onClick={convertlow}>
              Change To LowerCase
            </button>
            {/* <button className="btn" onClick={convertoriginal}>
          Change To OriginalText
        </button> */}
            <button className="btn del" onClick={cleartext}>
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="containersecond">
        <div className="reading">
          <h3 className="text_summary">Reading Speed</h3>
          <div className="speed_name">
            <div
              className="coloumns_speed "
              id="colmn1"
              style={text.length === 0 ? prevstyle : orgstyle}
            >
              <div>Slow </div>
              <div>Average </div>
              <div>Fast </div>
            </div>
            <div
              className="coloumns_speed"
              id="colmn3"
              style={text.length === 0 ? prevstyle : change_arrow_color}
            >
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div
              className="coloumns_speed"
              id="colmn2"
              style={text.length === 0 ? prevstyle : change_arrow_color}
            >
              <div>
                {text.split(/\s+/).filter((e) => {
                  return e.length !== 0;
                }).length / 170}
              </div>
              <div>
                {" "}
                {text.split(/\s+/).filter((e) => {
                  return e.length !== 0;
                }).length / 200}
              </div>
              <div>
                {text.split(/\s+/).filter((e) => {
                  return e.length !== 0;
                }).length / 230}
              </div>
            </div>
            <div
              className="coloumns_speed"
              id="colmn3"
              style={text.length === 0 ? prevstyle : { color: "wheat" }}
            >
              <div>minutes</div>
              <div>minutes</div>
              <div>minutes</div>
            </div>
          </div>
        </div>
        <div className="summary_of_text">
          <h3 className="text_summary">Your Text Summary</h3>
          <div className="speed_name">
            <div
              className="coloumns_speed "
              id="colmn1"
              style={text.length === 0 ? prevstyle : orgstyle}
            >
              <div>Character Count</div>
              <div> Word Count </div>
              <div>Line Count</div>
            </div>
            <div
              className="coloumns_speed"
              id="colmn3"
              style={text.length === 0 ? prevstyle : change_arrow_color}
            >
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>
            <div
              className="coloumns_speed"
              id="colmn2"
              style={text.length === 0 ? prevstyle : change_arrow_color}
            >
              <div>{text.length}</div>
              <div>
                {
                  text.split(/\s+/).filter((e) => {
                    return e.length !== 0;
                  }).length
                }
              </div>
              <div>
                {
                  text.split("\n").filter((e) => {
                    return e.length !== 0;
                  }).length
                }
              </div>
            </div>
            {/* <div className="coloumns_speed" id="colmn3">
              <div>minutes</div>
              <div>minutes</div>
              <div>minutes</div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
