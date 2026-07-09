const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("successPopup").style.display="flex";

    form.reset();

});

function closePopup(){

    document.getElementById("successPopup").style.display="none";

}