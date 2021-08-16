import { postPartyForm } from "./dataAccess.js"

const mainContainer = document.querySelector("#mainContainer")

document.addEventListener("click", 
  (event) => {
    if(event.target.id === "partyRequestButton") {
      const parentNameData = document.querySelector("input[name=`parentName']").value
      const childNameData = document.querySelector("input[name=`childName']").value
      const guestNumbersData = document.querySelector("input[name=`guestNumbers']").value
      const addressOfPartyData = document.querySelector("input[name=`addressOfParty']").value
      const dateOfPartyData = document.querySelector("input[name=`dateOfParty']").value
      const lengthOfPartyData = document.querySelector("input[name=`lengthOfParty']").value


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
    <input name="parentName" id="parent" value="">
  </div>
  <div>
    <label for="to">Child Name</label>
    <input name="childName" id="child" value="">
  </div>
  <div>
    <label for="to">Number of Guests</label>
    <input name="guestNumbers" id="guest" value="">
  </div>
  <div>
    <label for="to">Address</label>
    <input name="addressOfParty" id="address" value="">
  </div>
  <div>
    <label for="to">Date</label>
    <input type="date" name="dateOfParty" id="party" value="">
  </div>
  <div>
    <label for="to">LengthOfParty</label>
    <input name="length Of Party In Hours" id="party" value="">
  </div>
  <div>
    <button class="button" id="partyRequestButton">Send my greetings</button>
  </div>`
}


//function that returns an object with the properties listed below. each property needs to be value of specific input. document.queryselector('#parent').value




        // "id": 1,
        //  "parentName": "Josh Pulley",
        //  "childName": "Gus",
        //  "numOfChildren": 2,
        //  "address": "1230 Fake Address Lane",
        //  "date": "October 32, 2018",
        //  "lengthOfPartyInHours": 2.5



