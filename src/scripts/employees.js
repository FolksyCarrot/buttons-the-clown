import { getEmployees } from "./dataAccess.js";



export const renderEmployees = () => {
    const employees = getEmployees()
    let html = "<select><option disabled selected value> -- Select employee -- </option>"
    for (const employee of employees) {
        html += `<option value="${employee.id}"> ${employee.name} </option>` 
    }
    html += "</select>"
    html +="<button class='button' id= 'employeeSubmitButton'>button</button>"
    return html
}