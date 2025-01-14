{/* <div id="parent">
<div id"children>
<h1></h1>
</div>
</div>
Lets try to create this type of structure using React */}
const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"children"},
        React.createElement("h1",{id:"heading"},
            "This is an example of nested Elements inside react")))
console.log(parent)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)