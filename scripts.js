/*function showAlert() { alert('Hola, esta es una alerta de Javascript');}*/
document.querySelector("button.button-menu-toggle")
document.addEventListener("click", function() {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")
    }
 )