const display=document.getElementById("display");
function appendToDisplay(input){
    display.value += input; // we are entering the input inside the display box on the calculator by display.value+=input

}
function clearDisplay(){
    display.value=""; // we are giving an empty string to clear the display here , so the empty string works by clearing the display ! 

}
function calculate(){
    try{
        display.value=eval(display.value); 
    }
    catch(error){
        display.value="error !";

    }
    // eval() function is used to evaluate the expression inside the display box and then display it for this we are using here display.value=eval(display.value);

}