import { getEmployees, postEmployeeSignUp } from "./dataAccess.js";

const mainContainer = document.querySelector("#mainContainer")

mainContainer.addEventListener("click", 
(event) => {
    const employees = getEmployees()
    if (event.target.id === "employeeSubmitButton") {
        const idOfEmployee = parseInt(document.querySelector("#employeeSelection").value)
        const foundEmployee = employees.find( (employee) => employee.id === idOfEmployee)

        const sendEmployeeNameToAPI = {
            employeeName: foundEmployee
        }
        
        postEmployeeSignUp(sendEmployeeNameToAPI)
    }
}
)



export const renderEmployees = () => {
    const employees = getEmployees()
    let html = "<select id='employeeSelection'><option disabled selected value> -- Select employee -- </option>"
    for (const employee of employees) {
        html += `<option value="${employee.id}"> ${employee.name} </option>` 
    }
    html += "</select>"
    html +="<button class='button' id= 'employeeSubmitButton'>button</button>"
    return html
}