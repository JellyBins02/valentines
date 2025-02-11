var counter = 0;
var max_counter = 5;
let scaleValue = 1;
let dudu = document.getElementById("dudu2");
let sentence = document.getElementById("sentences");
let buttons = document.getElementById("buttons");

function scroll_up() {
    document.getElementById("top_container").scrollIntoView({ behavior: "smooth" });
};

function name_entered(){
    document.getElementById("middle_container").scrollIntoView({ behavior: "smooth" });

    let name = document.getElementById("input_inner").value;

    let sentence = document.getElementById("sentences");

    sentence.innerHTML = "Will you be my valentine, " + name + "?";
}

function no_btn(){
    if(counter == 5){
        counter = 0;
    }else {
        counter++;
    }
    
    let counter_src = counter + 1;
    let dudu_src = "Pics/dudu-sad" + counter_src + ".gif";
    let yes_btn = document.getElementById("yes_btn");

    scaleValue += 0.5;

    dudu.src = dudu_src;

    var messages = ["Please?", "I will be very sad bubu :(", "Please say yes, bubu :<"
        , "I am sad now, bubu T-T", "I love you bubu, please be my valentine :<", "Bubu please say yes. I love you :<"];
    
    sentence.innerHTML = messages[counter];

    yes_btn.style.transform = `scale(${scaleValue})`; // Apply transform
}

function yes_btn(){
    dudu.src = "Pics/she-said-yes.gif";
    sentence.innerHTML = "Yippie! See you on saturday, bubu!";

    buttons.style.display = "none";
}
