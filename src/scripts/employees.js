import { getEmployees } from "./dataAccess.js";



export const renderEmployees = () => {
    const employees = getEmployees()
    let html = "<select>"
    for (const employee of employees) {
       html += `<option> ${employee.name} </option>` 
    }
    html += "</select>"
    return html
}