import React from "react";
import ReactDom from "react-dom";

export default function App() {
    return (
        <div>Hello world</div>
    )
}



let container = document.getElementById("app");
ReactDom.render(React.createElement(App), container);
