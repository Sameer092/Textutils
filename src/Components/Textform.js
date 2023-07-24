import React, { useState } from "react";

export default function Textform(props) {
    const Upperbutton_func = () => {
        setText(text.toUpperCase());
        props.alert("Converted to Uppercase", "success")
    };
    const onchange_func = (event) => {
        setText(event.target.value);
    };

    const Lowerbutton_func = () => {
        setText(text.toLowerCase());
        props.alert("Converted to Lowercase", "success")
    };

    const Clearbutton_func = () => {
        let newText = "";
        setText(newText);
        props.alert("Text Cleared", "success")
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.alert("Copy to clipboard!", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.alert("Extra spaces cleared", "success")
    }

    const filterbutton_func = () => {
        const filteredText = text.split("").filter((char) => char !== "S" && char !== "s").join("");
        setText(filteredText);
        props.alert("Filter value Completed", "success")
    };

    const [text, setText] = useState("");

    return (<>
        <div className="container">
            <h1 style={{fontSize : '35px'}} className=  { `mb-4 ${props.gmode === "success" ? "text-white" : "text-black"
                } || ${props.bmode === "primary" ? "text-white" : "text-black "
                } || ${props.mode === "black" ? "text-white" : "text-black "}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className={`form-control ${props.gmode === "success" ? "text-white bg-success" : "text-black"
                        } || ${props.bmode === "primary" ? "text-white bg-primary" : "text-black "
                        } || ${props.mode === "black" ? "text-white bg-dark" : "text-black "}`}
                    id="mybox"
                    rows="8"
                    onChange={onchange_func}
                    value={text}
                ></textarea>
            </div>
            <div className="button-class">
                <button disabled={text.length === 0}
                    className={`btn ${props.mode === 'dark'
                        ? 'btn-dark'
                        : props.gmode === 'success'
                            ? 'btn-success'
                            : props.bmode === 'primary'
                                ? 'btn-primary'
                                : 'btn-dark'
                        }`} onClick={Upperbutton_func}
                >
                    Convert to Uppercase
                </button>
                <button disabled={text.length === 0} className={`btn ${props.mode === 'dark'
                    ? 'btn-dark'
                    : props.gmode === 'success'
                        ? 'btn-success'
                        : props.bmode === 'primary'
                            ? 'btn-primary'
                            : 'btn-dark'
                    }`} onClick={Lowerbutton_func}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length === 0} className={`btn ${props.mode === 'dark'
                    ? 'btn-dark'
                    : props.gmode === 'success'
                        ? 'btn-success'
                        : props.bmode === 'primary'
                            ? 'btn-primary'
                            : 'btn-dark'
                    }`} onClick={Clearbutton_func}>
                    Clear the Box
                </button>
                <button disabled={text.length === 0} className={`btn ${props.mode === 'dark'
                    ? 'btn-dark'
                    : props.gmode === 'success'
                        ? 'btn-success'
                        : props.bmode === 'primary'
                            ? 'btn-primary'
                            : 'btn-dark'
                    }`} onClick={filterbutton_func}>
                    Filter the value
                </button>
                <button disabled={text.length === 0} className={`btn ${props.mode === 'dark'
                    ? 'btn-dark'
                    : props.gmode === 'success'
                        ? 'btn-success'
                        : props.bmode === 'primary'
                            ? 'btn-primary'
                            : 'btn-dark'
                    }`} onClick={handleCopy}>
                    Copy text
                </button>
                <button disabled={text.length === 0} className={`btn ${props.mode === 'dark'
                    ? 'btn-dark'
                    : props.gmode === 'success'
                        ? 'btn-success'
                        : props.bmode === 'primary'
                            ? 'btn-primary'
                            : 'btn-dark'
                    }`} onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
        </div >
        <div className={`container my-3 ${props.gmode === "success" ? "text-white" : "text-black"
            } || ${props.bmode === "primary" ? "text-white" : "text-black "
            } || ${props.mode === 'black' ? 'text-white' : 'text-black '}`} id="Summary-id">
            <h2>Yours text Summary</h2>
            <p className="Sum-head">
                {text.split(/\s+/).filter((t) => t !== "").length} words {text.length}{" "}
                characters
            </p>
            <p className="Sum-head">
                {0.008 * text.split(/\s+/).filter((t) => t !== "").length} minutes to
                read above paragraph or line
            </p>
            <h2>Preview</h2>
            <p>{text.length === 0 ? 'Nothing to Preview!' : text}</p>
        </div>
    </>
    );
}
