import { getEmployeeSignUp } from "./dataAccess.js";

export const employeeSignUp = () => {
    const signUp = getEmployeeSignUp()
    let html = "<h2>Employee Shift</h2>"
    for (const individualShift of signUp) {
        html += `<ul>
         <li> partyId:${individualShift.partyId}
          employeeName: ${individualShift.employeeName} </li>
         </ul>`
    }
    
    return html
}