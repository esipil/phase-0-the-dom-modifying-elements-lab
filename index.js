main.remove();

const newHeader = document.createElement("h1");
newHeader.id="victory";
newHeader.innerHTML= "YOUR-NAME is the champion";
const node = document.createTextNode("h1#victory");
newHeader.appendChild(node);

const element = document.getElementById("#victory");
element.appendChild(newHeader);




