import React from "react";
import "./index.css";
import { useState } from "react";

function Cost(props) {
    const { amount } = props;
    const [title, setTitle] = useState(props.title);
    function changeTitle() {
        setTitle("changed title!" + counter);
    }
    return (
        <div className="expenses">
            <div>{title}</div>
            <div>{amount}</div>
            <button onClick={changeTitle}>change title</button>
        </div>
    )
}

export default Cost;