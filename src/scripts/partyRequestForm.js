const mainContainer = document.querySelector("#mainContainer")

export const renderHtml = () => {
  return `<div>
    <label for="say">Parent Name</label>
    <input name="parentName" id="parent" value="">
  </div>
  <div>
    <label for="to">Number of Guests</label>
    <input name="guestNumbers" id="guest" value="">
  </div>
  <div>
    <label for="to">Child Name</label>
    <input name="childName" id="child" value="">
  </div>
  <div>
    <label for="to">Address</label>
    <input name="addressOfParty" id="address" value="">
  </div>
  <div>
    <label for="to">Date</label>
    <input name="dateOfParty" id="party" value="">
  </div>
  <div>
    <label for="to">LengthOfParty</label>
    <input name="dateOfParty" id="party" value="">
  </div>
  <div>
    <button>Send my greetings</button>
  </div>`
}

export function transientObject = () => {
  document.querySelector
}

//function that returns an object with the properties listed below. each property needs to be value of specific input. document.queryselector('#parent').value




        // "id": 1,
        //  "parentName": "Josh Pulley",
        //  "childName": "Gus",
        //  "numOfChildren": 2,
        //  "address": "1230 Fake Address Lane",
        //  "date": "October 32, 2018",
        //  "lengthOfPartyInHours": 2.5



