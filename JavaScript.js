let insered = false;


function save() {
    let email = document.getElementById("emailInput").value;
    localStorage.setItem('email', email);
    alert("Registrazione effetuata ");

    
}


function checktext() {
    let email = localStorage.getItem("email")
    if (email != null) {
        insered = true;
        let button = document.getElementById("unsubscribe");
        button.disabled = Insered;
    } else
        let button = document.getElementById("unsubscribe");
        button.disabled = Insered;

}

function registrazione() {

    let email = localStorage.getItem("email");

}
function cancella() {
    localStorage.clear();
    document.getElementById("subscribe").style.display = "block";
    document.getElementById("unsubscribe").style.display = "none";

}