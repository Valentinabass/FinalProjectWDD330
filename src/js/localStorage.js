const addBtn = document.getElementById("add-btn");
const word = document.getElementById("inp-word");
const containerTwo = document.querySelector(".container-two");

const storeWord = () => {

    const inputWord = {
        input_word: word.value
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

    word.value = "";

};

addBtn.addEventListener("click", () => {
    if(word.value == "" || word.value.trim() == "") {
        window.alert("empty input, write something");
    }else{
        storeWord();
    }
});