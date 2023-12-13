/*
1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML pasirašyti, bet norintiems sudėtingiau - pabandykite su JS sukurti html elementus).
*/

const card = document.getElementById("card")
const nameAge = document.getElementById("name-age")


fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => {

    // Image
    const img = document.createElement("img")
    img.src = data.results[0].picture.large
    card.append(img)

    // name-age div
    const nameAge = document.createElement("div")
    nameAge.classList.add("name-age")
    card.append(nameAge)

    // name
    const fullName = document.createElement("span")
    fullName.innerText = data.results[0].name.first + " " + data.results[0].name.last
    nameAge.append(fullName)

    // age
    const age = document.createElement("span")
    age.classList.add("age")
    age.innerText = data.results[0].dob.age + " years old"
    nameAge.append(age)

    // email
    const email = document.createElement("h2")
    email.innerText = data.results[0].email
    card.append(email)

    
    console.log(data.results[0])
  })
  .catch(e => console.log(e.message))
  