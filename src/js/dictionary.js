const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const addBtn = document.getElementById("add-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url} ${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);

    });
});

    function playSound() {
     sound.play();

}

    //BOX FAVORITE LIST!

<button id="remove-btn"><i class="fa-solid fa-xmark"></i></button>
const word = document.getElementById("inp-word");
  const btnAdd = document.getElementById("add-btn");
  const containerTwo = document.querySelector(".container-two");
    let id= 1;

 function addAll() {
    const div_todo = document.createElement("div");
    const div_container = document.createElement("div");
    const parrafo  = document.createElement("p");
    const div_boton = document.createElement("div");
    const button = document.createElement("button");
    const icono = document.createElement("i");


    parrafo.innerHTML = word.value;
    div_todo.classList.add("container-list-first");
    div_container.classList.add("container-list");
    parrafo.classList.add("added-word");
    div_boton.classList.add("div-remove-btn");
    button.classList.add("remove-btn");

    button.setAttribute("id", id++);

    icono.classList.add("fa-solid fa-xmark");

    //to show
       div_todo.appendChild(div_container);
        div_todo.appendChild(div_boton);
        div_container.appendChild(parrafo);
        button.appendChild(icono);
        div_boton.appendChild(button);

//add all to the box
    containerTwo.appendChild(div_todo);

   // input empty again
    word.value = "";
    }



btnAdd.addEventListener("click", () => {
if(word.value == "" || word.value.trim() == "") {
  window.alert("empty input");
     } else {
   addAll();
}
});

