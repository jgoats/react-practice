import React from "react";
import ReactDom from "react-dom";
import Cost from "./expenses/expenses.js";

function App() {
    const expenses = [
        {
            title: "rent",
            amount: 1200,
        },
        {
            title: "food",
            amount: 400
        },
        {
            title: "gasoline",
            amount: 100
        }
    ]
    return (
        <div>
            <Cost title={expenses[0].title} amount={expenses[0].amount} />
        </div>
    )
}

export default App;



let container = document.getElementById("app");
ReactDom.render(React.createElement(App), container);
