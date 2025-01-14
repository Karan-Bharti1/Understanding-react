{/* <div id="parent">
<div id"children>
<h1></h1>
<h2></h2>// How to add one more children? Do this by passing sibling children in an array i.e. form an array of children
</div>
</div>
Lets try to create this type of structure using React */}
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"children"},
       [ React.createElement("h1",{id:"heading"},"This is an example of nested Elements inside react"),
        React.createElement("h2",{id:"subHeading"},"This is another children of same element")]
        ))
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)