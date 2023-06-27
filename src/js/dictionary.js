const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const favorite = document.getElementById("add-btn");

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
//  add to fav 

// function getLocalStorage(key) {
//     return JSON.parse(localStorage.getItem(key));
//   }
  
//   // save data to local storage
// function setLocalStorage(key, data) {
//     localStorage.setItem(key, JSON.stringify(data));
//   }
  
// favorite.addEventListener("click", () => {
//     let  word = document.getElementById("inp-word").value;
//     let wordMeaning = document.getElementById("word-meaning").value;
//     });