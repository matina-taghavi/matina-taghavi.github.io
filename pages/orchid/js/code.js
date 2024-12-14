const BTN = document.querySelectorAll("button");
const PARAGRAGH = document.querySelectorAll("p");
const ICON = document.querySelectorAll("i");
const BOX = document.querySelectorAll("div");
const PRELOADING = document.querySelector(".loader");
const SERV = document.querySelectorAll("a");
const INPUT = document.querySelectorAll("input");
const SPAN = document.querySelectorAll("span");
const LIST = document.querySelectorAll("li");

console.log(LIST);


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



// ICON[0].addEventListener("click", function () {
//     ADS.classList.toggle("hidden");
//     if (ADS.classList.contains("hidden")) {
//         ICON[0].classList.replace("bi-arrow-down", "bi-arrow-up");
//     }
//     else {
//         ICON[0].classList.replace("bi-arrow-up", "bi-arrow-down");
//     }
// });

console.log(PARAGRAGH[7]);
console.log(BOX[23]);
// click on user add a name 

BTN[0].addEventListener('mouseenter', function () {
    PARAGRAGH[5].style.color = "#55883b";
});
BTN[0].addEventListener('mouseleave', function () {
    PARAGRAGH[5].style.color = "#f6f4f3";
});

SERV[0].addEventListener("click", function () {
    if (ICON[0].classList.contains("bi-chevron-down")) {
        ICON[0].classList.replace("bi-chevron-down", "bi-chevron-up");
    }
    else {
        ICON[0].classList.replace("bi-chevron-up", "bi-chevron-down");
    }
})


console.log(ICON);
console.log(PARAGRAGH);

ICON[5].addEventListener('mouseenter', function () {
    ICON[5].classList.replace("bi-phone-vibrate", "bi-phone-vibrate-fill");
});
ICON[5].addEventListener('mouseleave', function () {
    ICON[5].classList.replace("bi-phone-vibrate-fill", "bi-phone-vibrate");
});

LIST[9].addEventListener('mouseenter', function () {
    ICON[9].classList.replace("bi-geo-alt", "bi-geo-alt-fill");
});
LIST[9].addEventListener('mouseleave', function () {
    ICON[9].classList.replace("bi-geo-alt-fill", "bi-geo-alt");
});

LIST[10].addEventListener('mouseenter', function () {
    ICON[10].classList.replace("bi-telephone", "bi-telephone-fill");
});
LIST[10].addEventListener('mouseleave', function () {
    ICON[10].classList.replace("bi-telephone-fill", "bi-telephone");
});

LIST[11].addEventListener('mouseenter', function () {
    ICON[11].classList.replace("bi-envelope", "bi-envelope-fill");
});
LIST[11].addEventListener('mouseleave', function () {
    ICON[11].classList.replace("bi-envelope-fill", "bi-envelope");
});

LIST[12].addEventListener('mouseenter', function () {
    ICON[12].classList.replace("bi-people", "bi-people-fill");
});
LIST[12].addEventListener('mouseleave', function () {
    ICON[12].classList.replace("bi-people-fill", "bi-people");
});

LIST[13].addEventListener('mouseenter', function () {
    ICON[13].classList.replace("bi-telephone", "bi-telephone-fill");
});
LIST[13].addEventListener('mouseleave', function () {
    ICON[13].classList.replace("bi-telephone-fill", "bi-telephone");
});

LIST[14].addEventListener('mouseenter', function () {
    ICON[14].classList.replace("bi-person-plus", "bi-person-plus-fill");
});
LIST[14].addEventListener('mouseleave', function () {
    ICON[14].classList.replace("bi-person-plus-fill", "bi-person-plus");
});

LIST[15].addEventListener('mouseenter', function () {
    ICON[15].style.color = "#25D366";

});
LIST[15].addEventListener('mouseleave', function () {
    ICON[15].style.color = "#57626C";
});

LIST[16].addEventListener('mouseenter', function () {
    ICON[16].style.color = "#229ED9";
});
LIST[16].addEventListener('mouseleave', function () {
    ICON[16].style.color = "#57626C";
});

LIST[17].addEventListener('mouseenter', function () {
    ICON[17].style.color = "#c13584";
});
LIST[17].addEventListener('mouseleave', function () {
    ICON[17].style.color = "#57626C";
});


let service = parseInt(window.getComputedStyle(BOX[23]).width);
PARAGRAGH[7].addEventListener("mouseenter", function () {
    BOX[23].style.width = `${service * 1.5}px`;
});
PARAGRAGH[7].addEventListener("mouseleave", function () {
    BOX[23].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[41]).width);
PARAGRAGH[14].addEventListener("mouseenter", function () {
    BOX[41].style.width = `${service * 2}px`;
});
PARAGRAGH[14].addEventListener("mouseleave", function () {
    BOX[41].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[55]).width);
PARAGRAGH[15].addEventListener("mouseenter", function () {
    BOX[55].style.width = `${service * 2}px`;
});
PARAGRAGH[15].addEventListener("mouseleave", function () {
    BOX[55].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[73]).width);
PARAGRAGH[16].addEventListener("mouseenter", function () {
    BOX[73].style.width = `${service * 2}px`;
});
PARAGRAGH[16].addEventListener("mouseleave", function () {
    BOX[73].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[91]).width);
PARAGRAGH[17].addEventListener("mouseenter", function () {
    BOX[91].style.width = `${service * 2}px`;
});
PARAGRAGH[17].addEventListener("mouseleave", function () {
    BOX[91].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[114]).width);
PARAGRAGH[19].addEventListener("mouseenter", function () {
    BOX[114].style.width = `${service * 1.8}px`;
});
PARAGRAGH[19].addEventListener("mouseleave", function () {
    BOX[114].style.width = `${service}px`;
});
console.log(ICON);
console.log(BOX);

service = parseInt(window.getComputedStyle(BOX[118]).width);
PARAGRAGH[22].addEventListener("mouseenter", function () {
    BOX[118].style.width = `${service * 1.5}px`;
});
PARAGRAGH[22].addEventListener("mouseleave", function () {
    BOX[118].style.width = `${service}px`;
});

let width2 = parseInt(window.getComputedStyle(BTN[5]).width);
let width1 = parseInt(window.getComputedStyle(BOX[108]).width);
BTN[5].addEventListener("click", function () {
    if (INPUT[0].value == "") {
        PARAGRAGH[18].textContent = "لطفا شماره خود را وارد کنید";
        BTN[5].setAttribute("title", "هیج شماره‌ای فعلا وارد نشده");

    }
    else if (INPUT[0].selectionEnd < 11 || INPUT[0].selectionEnd > 11) {
        PARAGRAGH[18].textContent = "شماره را با دقت وارد کنید";
        BTN[5].setAttribute("title", "شماره تلفن باید 11 رقمی باشد");
    }
    else if (INPUT[0].selectionEnd == 11) {
        PARAGRAGH[18].textContent = "به خانواده ارکیده خوش آمدید";
        INPUT[0].value = "";
        INPUT[0].style.display = "none";
        BTN[5].classList.replace("unregister", "register");
        BTN[5].style.cursor = "none";
        let key = setInterval(function () {
            if (width1 > width2) {
                width1 -= 5;
                BOX[109].style.width = `${width1}px`;
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
ICON[8].addEventListener("click", function () {
    if (ICON[8].classList.contains("bi-arrow-down-short")) {
        ICON[8].classList.replace("bi-arrow-down-short", "bi-arrow-up-short");
        let down = setInterval(function () {
            bottom -= 67;
            BOX[132].style.bottom = `${bottom}px`;
            if (bottom == -124) {
                clearInterval(down);
            }
        }, 50)
    }
    else {
        ICON[8].classList.replace("bi-arrow-up-short", "bi-arrow-down-short");
        let up = setInterval(function () {
            bottom += 67;
            BOX[132].style.bottom = `${bottom}px`;
            if (bottom == 10) {
                clearInterval(up);
            }
        }, 50)
    }
});