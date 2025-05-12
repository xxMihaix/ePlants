// JavaScript
// JavaScript
function applyTheme(isDark) {
    const elements = [
        document.getElementById("search-bar"),
        document.querySelector(".circle-circle"),
        document.querySelector(".svg1"),
        document.querySelector(".svg2"),
        document.querySelector(".circle-circle-1"),
        document.querySelector(".svg1-1"),
        document.querySelector(".svg2-1"),
        document.getElementById("body")
    ];

    elements.forEach(element => {
        if (!element) return;
        if (isDark) {
            element.classList.add('dark-mode', 'active');
        } else {
            element.classList.remove('dark-mode');
            element.classList.remove('active');
        }
    });
}

function syncButtons(isDark) {
    const check1 = document.getElementById("check");
    const check2 = document.getElementById("check2");
    if (check1) check1.checked = isDark;
    if (check2) check2.checked = isDark;
}

function setupToggle(buttonId) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    button.addEventListener('change', () => {
        const isDark = button.checked;
        localStorage.setItem("isDark", isDark);
        applyTheme(isDark);
        syncButtons(isDark);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedDark = localStorage.getItem("isDark") === "true";
    applyTheme(savedDark);
    syncButtons(savedDark);
    setupToggle("check");
    setupToggle("check2");
});


















/*



let isDark = localStorage.getItem("isDark") === "false";

if (isDark) {
    console.log("isDark Mode");
}

function checkedButton() {
    const checkButton = document.getElementById("check");

    const elements = [
        document.getElementById("search-bar"),
        document.querySelector(".circle-circle"),
        document.querySelector(".svg1"),
        document.querySelector(".svg2"),
        document.getElementById("body"),
    ];

    checkButton.addEventListener('change', function () {
        

        
        isDark = checkButton.checked;
        localStorage.setItem('isDark', isDark);

        elements.forEach(element => {
            if (isDark) {
                element.classList.add('dark-mode', 'active');
            } else {
                element.classList.remove('dark-mode', 'active');
            }
        });
    });

    // Aplică tema la încărcare, dacă era salvată
    if (isDark) {
        checkButton.checked = true;
        elements.forEach(el => el.classList.add('dark-mode', 'active'));
    }
}

function checkedButton2() {
    const checkButton2 = document.getElementById("check2");

    const elements = [
        document.querySelector(".circle-circle-1"),
        document.querySelector(".svg1-1"),
        document.querySelector(".svg2-1"),
        document.getElementById("body")
    ];

    checkButton2.addEventListener('change', function () {
        elements.forEach(element => {
            if (checkButton2.checked) {
                element.classList.add('dark-mode', 'active');
            } else {
                element.classList.remove('dark-mode', 'active');
            }
        });
    });
}

// Apelare funcții
checkedButton();
checkedButton2();

*/