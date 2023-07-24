import React from "react";


export default function About(props) {
    // const mode_tiggle_func = () => {
    //     if (my_style.color === 'black') {
    //         style_func({
    //             color: 'white',
    //             backgroundColor: 'black',
    //         })
    //         setBodyBackground("black");
    //         button_func("Enable Light Mode")
           
    //     }
    //     else {
    //         style_func({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBodyBackground("white");
    //         button_func("Enable Dark Mode")
    //     }
    // }

    // const [bodyBackground, setBodyBackground] = useState("black");

// const [my_button,button_func] = useState("Enable Light Mode")

    // const [my_style, style_func] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })


    return (

        <div >
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${props.mode === 'dark'? 'bg-dark text-white' : 'bg-white text-black'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            // style={my_style}
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className={`accordion-body ${props.mode === 'dark'? 'bg-dark text-white' : 'bg-white text-black'}`} >
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button collapsed ${props.mode === 'dark'? 'bg-dark text-white' : 'bg-white text-black'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            // style={my_style}
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className={`accordion-body ${props.mode === 'dark'? 'bg-dark text-white' : 'bg-white text-black'}`} >
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button collapsed ${props.mode === 'dark'? 'bg-dark text-white' : 'bg-white text-black'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            // style={my_style}
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className={`accordion-body ${props.mode === 'dark'? 'bg-dark text-white' : 'bg-white text-black'}`}>
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" className="btn btn-dark my-3" onClick={mode_tiggle_func} style={my_style}>{my_button}</button> */}
            {/* <style>{`body { background-color: ${bodyBackground}; }`}</style> */}
        </div>
    );
}
