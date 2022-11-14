/* // Write your code here!
const element = document.createElement("div");

document.body.append(element);
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }

element.append(ul); */

/* //Add Elements to the DOM via innerHTML, bad example, adding text in long string is error prone/ difficult to debug
const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

  element.textContent = "You've changed what's on the screen!";

element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.className = "pet-listing dog"; */

const main = document.getElementById("main");

main.id = "new";
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Andrew is the champion";
document.body.append(newHeader);