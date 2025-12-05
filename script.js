//Uppgift 4//
const checkboxElement = document.getElementById("divStyle");

const textFields = document.getElementsByClassName("textfield");

const buttonElement = document.querySelector("#myButton");

const divElement = document.getElementsByTagName("div")[1];


//Uppgift 5//

function handleInput(e) {
    console.log(e.traget);

    const fieldName = e.target.name;

    if (fieldName === "content") {
        boxElement.innerHTML = e.target.value;
    }

}

//Uppgift 6//
checkboxElement.addEventListener("change", function(){
    if (!colorField) return;
    const chosenColor = colorField.value;
    boxElement.style.backgroundColor = chosenColor;

});



for (let field of textFields){
    field.addEventListener("input", handleInput);
}


buttonElement.addEventListener("click", function(){
    boxElement.remove();
});


