const add_Btn = document.getElementById("add-btn");
const word_1 = document.getElementById("inp-word");
const containerTwo_1 = document.querySelector(".container-two");


const storeWord = () => {

    const inputWord = {
        input_word: word_1.value
    };

    if(localStorage.getItem("inputWords") == null ) {
        let arrange = [];
        arrange.push(inputWord); 
        localStorage.setItem("inputWords", JSON.stringify(arrange));

    }else {
        let getWords = JSON.parse(localStorage.getItem("inputWords"));
        getWords.push(inputWord);
        localStorage.setItem("inputWords", JSON.stringify(getWords));
    }
    showWordsLS();
    word_1.value = "";

};


const showWordsLS = () => {
    let storedWords = JSON.parse(localStorage.getItem("inputWords"));
    containerTwo_1.innerHTML = ""; 
    
   
    for (let i = 0; i < storedWords.length; i++) {
        let words = storedWords[i].input_word;
        containerTwo_1.innerHTML += `
        <div class="container-list-first">
       
            <div class="container-list">
                <p class="added-word">${words}</p>
            </div>
        
            <div class="div-remove-btn">
                <button id="remove-btn" onclick= "removeWord('${words}')" ><i class="fas fa-trash-alt"></i></button>
            </div>
        </div> 
        `;
    }

}

const removeWord = (inputWord) => {
    let inputWords= JSON.parse(localStorage.getItem("inputWords"));
    for (let i = 0; i < inputWords.length; i++) { 
        if(inputWord == inputWords[i].input_word) {
            inputWords.splice(i,1);
        }
    }
    localStorage.setItem("inputWords", JSON.stringify(inputWords));
    showWordsLS();
};

add_Btn.addEventListener("click", () => {
    if(word_1.value == "" || word_1.value.trim() == "") {
         window.alert("empty input, write something");
     }else{
         storeWord();
     }
});