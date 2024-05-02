var settingsMenu = document.querySelector(".settings-menu");


function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}
var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Function to set initial theme based on localStorage
function setInitialTheme() {
    if(localStorage.getItem("theme") === "dark"){
        darkBtn.classList.add('dark-btn-on');
        document.body.classList.add("dark-theme");
    } else {
        darkBtn.classList.remove('dark-btn-on');
        document.body.classList.remove("dark-theme");
    }
}

// Call the function to set initial theme
setInitialTheme();
