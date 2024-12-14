const PARA = document.querySelectorAll("p");
const TXTBOX = document.querySelectorAll("input");
const ICON = document.querySelectorAll("i");
const BTN = document.querySelectorAll("button");
const A = document.querySelectorAll("a");
const PASS_STRENGTH = document.querySelector(".password-strength");


BTN[0].addEventListener("mouseenter", function () {
    A[2].style.color = "white";
});
BTN[0].addEventListener("mouseleave", function () {
    A[2].style.color = "#55883b";
})

window.addEventListener("load", function () {
    TXTBOX[0].value = "";
    TXTBOX[1].value = "";
    BTN[0].style.display = "none";
})


ICON[0].addEventListener("click", function () {
    if (TXTBOX[1].getAttribute("type") == "password") {
        TXTBOX[1].setAttribute("type", "text");
    }
    else {
        TXTBOX[1].setAttribute("type", "password");
    }
    if (ICON[0].classList.contains("bi-eye-slash")) {
        ICON[0].classList.replace("bi-eye-slash", "bi-eye");
    }
    else {
        ICON[0].classList.replace("bi-eye", "bi-eye-slash");
    }

});
console.log(TXTBOX);

function remove_class() {
    PASS_STRENGTH.classList.remove("weak")
    PASS_STRENGTH.classList.remove("not-bad")
    PASS_STRENGTH.classList.remove("normal")
    PASS_STRENGTH.classList.remove("good")
    PASS_STRENGTH.classList.remove("excelent")
}

TXTBOX[1].addEventListener("input", function () {
    let character_types = [0, 0, 0, 0, 0];
    let message = TXTBOX[1].value;
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
            character_types[0] = 1;
        }
        else if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            character_types[1] = 1;
        }
        else if (message.charCodeAt(i) >= 48 && message.charCodeAt(i) <= 57) {
            character_types[2] = 1;
        }
        else {
            character_types[3] = 1;
        }
    }
    if (message.length >= 12) {
        character_types[4] = 1;
    }
    let result = character_types[0] + character_types[1] + character_types[2] + character_types[3] + character_types[4];
    if (result == 0) {
        remove_class();
    }
    else if (result == 1) {
        remove_class();
        PASS_STRENGTH.classList.add("weak");
        PARA[1].textContent = "نیاز به تلاش بیشتر";
    }
    else if (result == 2) {
        remove_class();
        PASS_STRENGTH.classList.add("not-bad");
        PARA[1].textContent = "ضعیف";
    }
    else if (result == 3) {
        remove_class();
        PASS_STRENGTH.classList.add("normal");
        PARA[1].textContent = "قابل قبول";
    }
    else if (result == 4) {
        remove_class();
        PASS_STRENGTH.classList.add("good");
        PARA[1].textContent = "خوب";
    }
    else if (result == 5) {
        remove_class();
        PASS_STRENGTH.classList.add("excelent");
        PARA[1].textContent = "عالی";
    }
    if (result >= 3) {
        BTN[0].style.display = "block";
    }
    else if (result < 3) {
        BTN[0].style.display = "none";
    }
});
