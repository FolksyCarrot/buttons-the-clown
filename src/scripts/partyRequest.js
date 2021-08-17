import { getRequests } from "./dataAccess.js";
import { renderEmployees } from "./employees.js";

export const partyRequests = () => {
    const request = getRequests()
    let html = "<h2>Party Requests</h2>"
    for (const party of request) {
        html += `<ul>
        <li>${party.id}</li>
        <li>${party.parentName}</li>
        <li>${party.childName}</li>
        <li>${party.numOfChildren}</li>
        <li>${party.address}</li>
        <li>${party.date}</li>
        <li>${party.lengthOfPartyInHours}</li>
        ${renderEmployees()}
        </ul>
        `
    }
   
    return html
}



// export const partyRequests = () => {
//     const request = getRequests()
//     let html = "<h2>Party Requests</h2><ul>"
//     for (const party of request) {
//         html += `${party.map((request) => {`<li>${request}</li>`}).join("")}`
//     html += "</ul>"
//     return html
// }
// }