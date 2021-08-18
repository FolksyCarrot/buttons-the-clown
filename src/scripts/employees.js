import { getEmployees, postEmployeeSignUp, setEmployeeValueId, getEmployeeValueId } from "./dataAccess.js";

const mainContainer = document.querySelector("#mainContainer")

document.addEventListener("change", 
(changeEvent) => {
    if(changeEvent.target.id === "employeeSelection")
    setEmployeeValueId(parseInt(changeEvent.target.value))
})

mainContainer.addEventListener("click", 
(event) => { 
    const partyId = parseInt(event.target.name)
    const employees = getEmployees()
    const employeeValueId = getEmployeeValueId()
    if (event.target.id === "employeeSubmitButton") {
        const foundEmployee = employees.find( (employee) => employee.id === employeeValueId.employeeId)

        const sendEmployeeNameToAPI = {
            partyId: partyId,
            employeeName: foundEmployee.name
        }
        
        postEmployeeSignUp(sendEmployeeNameToAPI)
    }
}
)



export const renderEmployees = (id) => {
    const employees = getEmployees()
    let html = "<select id='employeeSelection'><option disabled selected value> -- Select employee -- </option>"
    for (const employee of employees) {
        html += `<option value="${employee.id}"> ${employee.name} </option>` 
    }
    html += "</select>"
    html += `<button class='button' name="${id}" id= 'employeeSubmitButton'>button</button>`
  
    return html
}