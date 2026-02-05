console.log("Hill")
const parent=document.getElementById("container");
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{},"Welcome to React dev");
const li2=React.createElement("li",{},"Java Programming");
const li3=React.createElement("li",{},"Python Programming");
const ul=React.createElement("ul",{},li2,li3);
const div=React.createElement("div",{},h2,ul);
root.render(div);