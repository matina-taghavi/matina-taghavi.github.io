// import { user } from './user.js';
// console.log(user);
const BTN = document.querySelectorAll("button");
const PARAGRAGH = document.querySelectorAll("p");
const ICON = document.querySelectorAll("i");
const BOX = document.querySelectorAll("div");
const PRELOADING = document.querySelector(".loader");
const SERV = document.querySelectorAll("a");
const INPUT = document.querySelectorAll("input");
const SPAN = document.querySelectorAll("span");
const LIST = document.querySelectorAll("li");
const BREAK = document.querySelectorAll("ul");
const OVERLAY = document.querySelector(".overlay");
const NAV = document.querySelector("nav");
const DOWN = document.querySelector(".down");







let opacity = 100;
window.addEventListener("load", function () {
    INPUT[0].value = "";
    let is_loading = setInterval(function () {
        opacity--;
        PRELOADING.style.opacity = `${opacity}%`;
        if (opacity <= 0) {
            PRELOADING.classList.add("hidden-load");
            clearInterval(is_loading);
        }
    }, 3);

});

console.log(ICON);
console.log(LIST);
console.log(BOX);
console.log(PARAGRAGH);
console.log(BREAK);



ICON[5].addEventListener("click", function () {
    let down = -100;
    let going_down = setInterval(function () {
        down += 5;
        DOWN.style.top = `${down}vh`;
        if (down == 0) {
            clearInterval(going_down);
        }

    }, 1);
})

ICON[0].addEventListener("click", function () {
    let top = 0;
    let going_up = setInterval(function () {
        top -= 5;
        DOWN.style.top = `${top}vh`;
        if (top == -100) {
            clearInterval(going_up);
        }

    }, 1);
})


let number = 0;
window.addEventListener("load", function () {
    let number1 = setInterval(function () {
        number += 10;
        SPAN[0].textContent = `${number.toLocaleString("fa-ir")}+`;
        if (number == 500) {
            clearInterval(number1);
        }

    }, 100);

})

let num = 0;
window.addEventListener("load", function () {
    let number2 = setInterval(function () {
        num += 5;
        SPAN[1].textContent = `${num.toLocaleString("fa-ir")}+`;
        if (num == 200) {
            clearInterval(number2);
        }

    }, 160);

})


BTN[0].addEventListener('mouseenter', function () {
    PARAGRAGH[12].style.color = "#55883b";
});
BTN[0].addEventListener('mouseleave', function () {
    PARAGRAGH[12].style.color = "#f6f4f3";
});


SERV[0].addEventListener("click", function () {
    ICON[1].classList.replace("bi-chevron-down", "bi-chevron-up");
    let opacity = 0;
    OVERLAY.classList.add("show-overlay");
    let key = setInterval(function () {
        opacity += 5;
        OVERLAY.style.opacity = `${opacity}%`;
        if (opacity >= 100) {
            clearInterval(key);
        }
    }, 1);
    BREAK[3].classList.remove("nav-hide");

    NAV.addEventListener("mouseleave", function () {
        ICON[1].classList.replace("bi-chevron-up", "bi-chevron-down");
        close_overlay();
        BREAK[3].classList.add("nav-hide");
    })

})





function close_overlay() {
    let opacity = 100;
    let key = setInterval(function () {
        opacity -= 5;
        OVERLAY.style.opacity = `${opacity}%`;
        if (opacity <= 0) {
            clearInterval(key);
        }
    }, 1);
    setTimeout(function () {
        OVERLAY.classList.remove("show-overlay");
    }, 300);
}



console.log(BOX);
console.log(PARAGRAGH);

ICON[6].addEventListener('mouseenter', function () {
    ICON[6].classList.replace("bi-phone-vibrate", "bi-phone-vibrate-fill");
});
ICON[6].addEventListener('mouseleave', function () {
    ICON[6].classList.replace("bi-phone-vibrate-fill", "bi-phone-vibrate");
});

// footer

LIST[20].addEventListener('mouseenter', function () {
    ICON[11].classList.replace("bi-geo-alt", "bi-geo-alt-fill");
});
LIST[20].addEventListener('mouseleave', function () {
    ICON[11].classList.replace("bi-geo-alt-fill", "bi-geo-alt");
});

LIST[21].addEventListener('mouseenter', function () {
    ICON[12].classList.replace("bi-telephone", "bi-telephone-fill");
});
LIST[21].addEventListener('mouseleave', function () {
    ICON[12].classList.replace("bi-telephone-fill", "bi-telephone");
});

LIST[22].addEventListener('mouseenter', function () {
    ICON[13].classList.replace("bi-envelope", "bi-envelope-fill");
});
LIST[22].addEventListener('mouseleave', function () {
    ICON[13].classList.replace("bi-envelope-fill", "bi-envelope");
});

LIST[23].addEventListener('mouseenter', function () {
    ICON[14].classList.replace("bi-people", "bi-people-fill");
});
LIST[23].addEventListener('mouseleave', function () {
    ICON[14].classList.replace("bi-people-fill", "bi-people");
});

LIST[24].addEventListener('mouseenter', function () {
    ICON[15].classList.replace("bi-telephone", "bi-telephone-fill");
});
LIST[24].addEventListener('mouseleave', function () {
    ICON[15].classList.replace("bi-telephone-fill", "bi-telephone");
});

LIST[25].addEventListener('mouseenter', function () {
    ICON[16].classList.replace("bi-person-plus", "bi-person-plus-fill");
});
LIST[25].addEventListener('mouseleave', function () {
    ICON[16].classList.replace("bi-person-plus-fill", "bi-person-plus");
});

LIST[26].addEventListener('mouseenter', function () {
    ICON[17].style.color = "#25D366";

});
LIST[26].addEventListener('mouseleave', function () {
    ICON[17].style.color = "#57626C";
});

LIST[27].addEventListener('mouseenter', function () {
    ICON[18].style.color = "#229ED9";
});
LIST[27].addEventListener('mouseleave', function () {
    ICON[18].style.color = "#57626C";
});

LIST[28].addEventListener('mouseenter', function () {
    ICON[19].style.color = "#c13584";
});
LIST[28].addEventListener('mouseleave', function () {
    ICON[19].style.color = "#57626C";
});


let service = parseInt(window.getComputedStyle(BOX[39]).width);
PARAGRAGH[14].addEventListener("mouseenter", function () {
    BOX[39].style.width = `${service * 1.5}px`;
});
PARAGRAGH[14].addEventListener("mouseleave", function () {
    BOX[39].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[57]).width);
PARAGRAGH[21].addEventListener("mouseenter", function () {
    BOX[57].style.width = `${service * 2}px`;
});
PARAGRAGH[21].addEventListener("mouseleave", function () {
    BOX[57].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[71]).width);
PARAGRAGH[22].addEventListener("mouseenter", function () {
    BOX[71].style.width = `${service * 2}px`;
});
PARAGRAGH[22].addEventListener("mouseleave", function () {
    BOX[71].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[89]).width);
PARAGRAGH[23].addEventListener("mouseenter", function () {
    BOX[89].style.width = `${service * 2}px`;
});
PARAGRAGH[23].addEventListener("mouseleave", function () {
    BOX[89].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[107]).width);
PARAGRAGH[24].addEventListener("mouseenter", function () {
    BOX[107].style.width = `${service * 2}px`;
});
PARAGRAGH[24].addEventListener("mouseleave", function () {
    BOX[107].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[130]).width);
PARAGRAGH[26].addEventListener("mouseenter", function () {
    BOX[130].style.width = `${service * 1.8}px`;
});
PARAGRAGH[26].addEventListener("mouseleave", function () {
    BOX[130].style.width = `${service}px`;
});


service = parseInt(window.getComputedStyle(BOX[134]).width);
PARAGRAGH[29].addEventListener("mouseenter", function () {
    BOX[134].style.width = `${service * 1.5}px`;
});
PARAGRAGH[29].addEventListener("mouseleave", function () {
    BOX[134].style.width = `${service}px`;
});
// hv.yffffffffffffffffff
service = parseInt(window.getComputedStyle(BOX[153]).width);
PARAGRAGH[40].addEventListener("mouseenter", function () {
    BOX[153].style.width = `${service * 1.3}px`;
});
PARAGRAGH[40].addEventListener("mouseleave", function () {
    BOX[153].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[155]).width);
PARAGRAGH[41].addEventListener("mouseenter", function () {
    BOX[155].style.width = `${service * 1.3}px`;
});
PARAGRAGH[41].addEventListener("mouseleave", function () {
    BOX[155].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[157]).width);
PARAGRAGH[42].addEventListener("mouseenter", function () {
    BOX[157].style.width = `${service * 1.5}px`;
});
PARAGRAGH[42].addEventListener("mouseleave", function () {
    BOX[157].style.width = `${service}px`;
});

console.log(BTN);


let width2 = parseInt(window.getComputedStyle(BTN[5]).width);
let width1 = parseInt(window.getComputedStyle(BOX[125]).width);
BTN[5].addEventListener("click", function () {
    if (INPUT[0].value == "") {
        PARAGRAGH[25].textContent = "لطفا شماره خود را وارد کنید";
        BTN[5].setAttribute("title", "هیج شماره‌ای فعلا وارد نشده");

    }
    else if (INPUT[0].selectionEnd < 11 || INPUT[0].selectionEnd > 11) {
        PARAGRAGH[25].textContent = "شماره را با دقت وارد کنید";
        BTN[5].setAttribute("title", "شماره تلفن باید 11 رقمی باشد");
    }
    else if (INPUT[0].selectionEnd == 11) {
        PARAGRAGH[25].textContent = "به خانواده ارکیده خوش آمدید";
        INPUT[0].value = "";
        INPUT[0].style.display = "none";
        BTN[5].classList.replace("unregister", "register");
        BTN[5].style.cursor = "none";
        let key = setInterval(function () {
            if (width1 > width2) {
                width1--;
                BOX[125].style.width = `${width1}px`;
            }
            if (width1 <= width2) {
                clearInterval(key);
            }

        }, 1);
    }
});
function isNumber(evt) {
    const charcode = (evt.which) ? evt.which : evt.keycode;
    if (charcode > 31 && (charcode < 48 || charcode > 57)) {
        evt.preventDefault();
    }
    if (INPUT[0].value.length == 0 && charcode != 48) {
        evt.preventDefault();
    }
    if (INPUT[0].value.length == 1 && charcode != 57) {
        evt.preventDefault();
    }
}


let bottom = 10;
ICON[10].addEventListener("click", function () {
    if (ICON[10].classList.contains("bi-arrow-down-short")) {
        ICON[10].classList.replace("bi-arrow-down-short", "bi-arrow-up-short");
        let down = setInterval(function () {
            bottom -= 67;
            BOX[149].style.bottom = `${bottom}px`;
            if (bottom == -124) {
                clearInterval(down);
            }
        }, 50)
    }
    else {
        ICON[10].classList.replace("bi-arrow-up-short", "bi-arrow-down-short");
        let up = setInterval(function () {
            bottom += 67;
            BOX[149].style.bottom = `${bottom}px`;
            if (bottom == 10) {
                clearInterval(up);
            }
        }, 50)
    }
});


bottom = 10;
ICON[9].addEventListener("click", function () {
    if (ICON[9].classList.contains("bi-arrow-down-short")) {
        ICON[9].classList.replace("bi-arrow-down-short", "bi-arrow-up-short");
        let down = setInterval(function () {
            bottom -= 67;
            BOX[148].style.bottom = `${bottom}px`;
            if (bottom == -124) {
                clearInterval(down);
            }
        }, 50)
    }
    else {
        ICON[9].classList.replace("bi-arrow-up-short", "bi-arrow-down-short");
        let up = setInterval(function () {
            bottom += 67;
            BOX[148].style.bottom = `${bottom}px`;
            if (bottom == 10) {
                clearInterval(up);
            }
        }, 50)
    }
});
// function closeAll(){
//     BREAK[5].classList.add("b-hide");
//     BREAK[6].classList.add("b-hide");
//     BREAK[7].classList.add("b-hide");
//     BREAK[8].classList.add("b-hide");
// }



BOX[160].addEventListener("click", function () {
    if (ICON[20].classList.contains("bi-caret-down-fill")) {
        ICON[20].classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }
    else {
        ICON[20].classList.replace("bi-caret-up-fill", "bi-caret-down-fill")
    }
    BREAK[7].classList.toggle("b-hide");
});

BOX[162].addEventListener("click", function () {
    if (ICON[21].classList.contains("bi-caret-down-fill")) {
        ICON[21].classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }
    else {
        ICON[21].classList.replace("bi-caret-up-fill", "bi-caret-down-fill")
    }
    BREAK[8].classList.toggle("b-hide");
});

BOX[164].addEventListener("click", function () {
    if (ICON[22].classList.contains("bi-caret-down-fill")) {
        ICON[22].classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }
    else {
        ICON[22].classList.replace("bi-caret-up-fill", "bi-caret-down-fill")
    }
    BREAK[9].classList.toggle("b-hide");
});

BOX[166].addEventListener("click", function () {
    if (ICON[23].classList.contains("bi-caret-down-fill")) {
        ICON[23].classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }
    else {
        ICON[23].classList.replace("bi-caret-up-fill", "bi-caret-down-fill")
    }
    BREAK[10].classList.toggle("b-hide");
})