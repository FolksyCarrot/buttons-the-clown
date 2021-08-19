import { getEmployeeSignUp } from "./dataAccess.js";

export const employeeSignUp = () => {
    const signUp = getEmployeeSignUp()
    let html = "<h2>Employee Shift</h2>"
    for (const individualShift of signUp) {
        html += `<ul>
         <li> Party Id:${individualShift.partyId}<br>
          Employee Name: ${individualShift.employeeName} </li>
         </ul>`
    }
    
    return html
}


