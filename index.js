const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=200";
const pokeBtn = document.getElementById("poke-btn");
const list = document.getElementById("list");

pokeBtn.addEventListener("click", () => {
  //   debugger;
  fetch(baseURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      itterateOverPoke(data["results"]);
    });
  function itterateOverPoke(data) {
    // console.log(data);
    for (poke of data) {
      console.log(poke);
      let li = document.createElement("li");
      li.innerHTML = poke["name"];
      li.addEventListener("mouseover", (event) => {
        // debugger;
        event.target.style.color = "green";
      });
      li.addEventListener("click", (event) => {
        // debugger;
        let li = event.target;
        let pokeUrl = poke["url"];
        //   console.log(pokeUrl)
        fetch(pokeUrl)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // console.log(data);
            extraPokeInfo(data, li);
          });
      });
      list.appendChild(li);
      //   console.log(li);
    }
  }
  function extraPokeInfo(data, li) {
    // debugger;
    let div = document.createElement("div");
    let pokeId = data["id"];
    let pokeHeight = data["height"];
    let pokeMoveOne = data["moves"][0]["move"]["name"];
    // console.log(pokeMoveOne, pokeHeight, pokeId)
    div.innerHTML = `Poke ID: ${pokeId}; Poke height: ${pokeHeight}; Poke move: ${pokeMoveOne}`;
    li.appendChild(div);
  }
});
