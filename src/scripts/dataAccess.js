const applicationState = {
    request:[],
    employeeSignUp: [],
    employees: []
}
const API = "http://localhost:8088"

const mainContainer = document.querySelector("#mainContainer")

export const fetchRequests = () => {
    return fetch (`${API}/request`)
        .then (response => response.json())
        .then (
            (serviceRequest) => {
                applicationState.request= serviceRequest
            }
            )
}

export const fetchEmployeeSignUp = () => {
    return fetch (`${API}/employeeSignUp`)
        .then (response => response.json())
        .then (
            (employeeRequest) => {
                applicationState.employeeSignUp= employeeRequest
            }
            )
}

//fetch brings information down to application state

export const fetchEmployees = () => {
    return fetch (`${API}/employees`)
        .then (response => response.json())
        .then (
            (employee) => {
                applicationState.employees= employee
            }
            )
}

export const postPartyForm = (userPartyRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyRequest)
    }


    return fetch(`${API}/request`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}




export const getRequests = () => applicationState.request.map(requests => ({...requests}))
export const getEmployeeSignUp = () => applicationState.employeeSignUp.map(signUp => ({...signUp}))
export const getEmployees = () => applicationState.employees.map(employee => ({...employee}))
