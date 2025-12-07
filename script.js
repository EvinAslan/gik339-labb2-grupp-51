//Uppgift 4//
const checkboxElement = document.getElementById("divStyle");/* Vi hämtar checkbox elementet som styr om vi ska ändra boxens stil.*/

const textFields = document.getElementsByClassName("textfield");/* Här hämtar vi alla textfält som färg och innehål som vi ska lyssna på*/

const buttonElement = document.querySelector("#myButton"); /* Här hämtar vi button med querySelector.
Vi valde querySelector eftersom  det är en modern och flexibel DOM funktion som även låter oss använda CSS selector och uppgift kraven var att vi skulle använda olika DOM metoder.*/

const divElement = document.getElementsByTagName("div")[1];/* Här hämtar vi det andra div elementet på sidan, vilket är den box vi arbetar med*/

const colorField = document.getElementById("color");/* Här hämtar textfältet där användaren skriver in färgen*/

//Uppgift 5//
/*Denna funktion hanterar input händelser från våra textfält.*/
function handleInput(e) {
    console.log(e.target);/*vi loggar vilket element som triggat händelsen.*/

    const fieldName = e.target.name; /*Vi hämtar  fältets namn för att avgöra vad som ska uppdateras*/

    /*Om användädaren skriver i innehållsfältet uppdaterar vi texten i div element*/
    if (fieldName === "content") {
        divElement.innerHTML = e.target.value;
    }

}

//Uppgift 6//
/*vi lyssnar på checkboxens ändringhändelse och ändrar boxens backgrundsfärg utifrån vald färg.*/
checkboxElement.addEventListener("change", function(){
    const chosenColor = colorField.value;/*Vi hämtar färgen som användaren skrivit in.*/
 
    divElement.style.backgroundColor = chosenColor;/*Vi sätter den färgen som bakgrund på boxen.*/


});


/*Vi ligger till en input lyssnare på  varje textfält så att handleinput körs när användaren skriver.*/
for (let field of textFields){
    field.addEventListener("input", handleInput);
}

/*När knappen klickas tar vi bort boxen divelement från sidan.*/
buttonElement.addEventListener("click", function(){
    divElement.remove();
});


