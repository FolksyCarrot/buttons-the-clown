const applicationState = {
    request:[],
    employeeSignUp: [],
    employees: []
}
const API = "http://localhost:8088"

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




export const getRequests = () => applicationState.request.map(requests => ({...requests}))
export const getEmployeeSignUp = () => applicationState.employeeSignUp.map(signUp => ({...signUp}))
export const getEmployees = () => applicationState.employees.map(employee => ({...employee}))
