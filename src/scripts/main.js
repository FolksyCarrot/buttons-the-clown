import { fetchRequests, fetchEmployeeSignUp, fetchEmployees } from "./dataAccess.js";
import { renderHtml } from "./partyRequestForm.js";

const mainContainer = document.querySelector("#mainContainer")

const render = () => {
    fetchRequests()
    fetchEmployeeSignUp()
    fetchEmployees()
    mainContainer.innerHTML = renderHtml()
}

render()

mainContainer.addEventListener("stateChanged", 
(event) => render())
