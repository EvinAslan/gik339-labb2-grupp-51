//Uppgift 4//
const checkboxElement = document.getElementById("divStyle");

const textFields = document.getElementsByClassName("textfield");

const buttonElement = document.querySelector("#myButton"); /* Här hämtar vi button med querySelector.
Vi valde querySelector eftersom  det är en modern och flexibel DOM funktion som även låter oss använda CSS selector och uppgift kraven var att vi skulle använda olika DOM metoder.*/



const divElement = document.getElementsByTagName("div")[1];


//Uppgift 5//

function handleInput(e) {
    console.log(e.target);

    const fieldName = e.target.name;

    if (fieldName === "content") {
        divElement.innerHTML = e.target.value;
    }

}

//Uppgift 6//
checkboxElement.addEventListener("change", function(){
    if (!colorField) return;
    const chosenColor = colorField.value;
    divElement.style.backgroundColor = chosenColor;

});



for (let field of textFields){
    field.addEventListener("input", handleInput);
}


buttonElement.addEventListener("click", function(){
    divElement.remove();
});


