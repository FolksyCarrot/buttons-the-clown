import { renderHtml } from "./partyRequestForm.js";

const mainContainer = document.querySelector("#mainContainer")

const render = () => {
    mainContainer.innerHTML = renderHtml()
}

render()

mainContainer.addEventListener("stateChanged", 
(event) => render())
