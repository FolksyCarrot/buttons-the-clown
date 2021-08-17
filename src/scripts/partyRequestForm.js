import { postPartyForm } from "./dataAccess.js"

import { partyRequests } from "./partyRequest.js"

document.addEventListener("click", 
  (event) => {
    if(event.target.id === "partyRequestButton") {
      const parentNameData = document.querySelector("input[name='parentName']").value
      const childNameData = document.querySelector("input[name='childName']").value
      const guestNumbersData = document.querySelector("input[name='guestNumbers']").value
      const addressOfPartyData = document.querySelector("input[name='addressOfParty']").value
      const dateOfPartyData = document.querySelector("input[name='dateOfParty']").value
      const lengthOfPartyData = document.querySelector("input[name='lengthOfParty']").value


      const partyRequestData = {
        parentName: parentNameData,
        childName: childNameData,
        numOfChildren: guestNumbersData,
        address: addressOfPartyData,
        date: dateOfPartyData,
        lengthOfPartyInHours: lengthOfPartyData
      }

      postPartyForm(partyRequestData)
    }

  }
)

export const renderHtml = () => {
  return `<h1>Request A Party</h1><div>
    <label for="say">Parent Name</label>
    <input type="text" name="parentName" id="parent" value="">
  </div>
  <div>
    <label for="to">Child Name</label>
    <input type="text" name="childName" id="child" value="">
  </div>
  <div>
    <label for="to">Number of Guests</label>
    <input type="number" name="guestNumbers" id="guest" value="">
  </div>
  <div>
    <label for="to">Address</label>
    <input type="text" name="addressOfParty" id="address" value="">
  </div>
  <div>
    <label for="to">Date</label>
    <input type="date" name="dateOfParty" id="party" value="">
  </div>
  <div>
    <label for="to">Length Of Party In Hours</label>
    <input type="number" name="lengthOfParty" id="party" value="">
  </div>
  <div>
    <button class="button" id="partyRequestButton">Start My Party</button>
  </div>
  <div>
    ${partyRequests()}
  </div>
  `
}





