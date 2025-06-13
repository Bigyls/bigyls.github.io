// imports
import { links } from "./links.js";

//constants
const linkContainer = document.getElementById("links");

//functions
function createLinkElement(name, link) {
  const a = document.createElement("a");
  a.href = link;
  a.className = "link";
  a.target = "blank";
  a.rel = "noopener noreferrer";

  const span = document.createElement("span");
  span.textContent = name + "  ";

  const img = document.createElement("img");
  img.className = "linkIcon";
  img.src = "./assets/link-solid.svg";
  img.alt = "";

  a.appendChild(span);
  a.appendChild(img);

  return a;
}

// logic
links.forEach((ele) => {
  let link = ele.link;
  let name = ele.name;

  const linkElement = createLinkElement(name, link);
  linkContainer.appendChild(linkElement);
});
