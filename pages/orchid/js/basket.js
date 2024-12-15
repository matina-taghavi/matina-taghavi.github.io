const SERV = document.querySelectorAll("a");
const BREAK = document.querySelectorAll("ul");
const ICON = document.querySelectorAll("i");
const BOX = document.querySelectorAll("div");
const LIST = document.querySelectorAll("li");
const PARAGRAGH = document.querySelectorAll("p");
const OVERLAY = document.querySelector(".overlay");
const NAV = document.querySelector("nav");
const DOWN = document.querySelector(".down");


console.log(PARAGRAGH);



window.addEventListener("load", function () {
    PARAGRAGH[8].innerHTML += "<a href='../index.html'>صفحه اصلی</a>"
})


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

console.log(SERV);
console.log(ICON);
console.log(BREAK);


SERV[1].addEventListener("click", function () {
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

console.log(ICON);
console.log(BOX);
console.log(BREAK);





BOX[28].addEventListener("click", function () {
    if (ICON[15].classList.contains("bi-caret-down-fill")) {
        ICON[15].classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }
    else {
        ICON[15].classList.replace("bi-caret-up-fill", "bi-caret-down-fill")
    }
    BREAK[8].classList.toggle("b-hide");
});

BOX[30].addEventListener("click", function () {
    if (ICON[16].classList.contains("bi-caret-down-fill")) {
        ICON[16].classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }
    else {
        ICON[16].classList.replace("bi-caret-up-fill", "bi-caret-down-fill")
    }
    BREAK[9].classList.toggle("b-hide");
});

BOX[32].addEventListener("click", function () {
    if (ICON[17].classList.contains("bi-caret-down-fill")) {
        ICON[17].classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }
    else {
        ICON[17].classList.replace("bi-caret-up-fill", "bi-caret-down-fill")
    }
    BREAK[10].classList.toggle("b-hide");
});

BOX[34].addEventListener("click", function () {
    if (ICON[18].classList.contains("bi-caret-down-fill")) {
        ICON[18].classList.replace("bi-caret-down-fill", "bi-caret-up-fill")
    }
    else {
        ICON[18].classList.replace("bi-caret-up-fill", "bi-caret-down-fill")
    }
    BREAK[11].classList.toggle("b-hide");
})



console.log(LIST);
console.log(ICON);

LIST[23].addEventListener('mouseenter', function () {
    ICON[6].classList.replace("bi-geo-alt", "bi-geo-alt-fill");
});
LIST[23].addEventListener('mouseleave', function () {
    ICON[6].classList.replace("bi-geo-alt-fill", "bi-geo-alt");
});

LIST[24].addEventListener('mouseenter', function () {
    ICON[7].classList.replace("bi-telephone", "bi-telephone-fill");
});
LIST[24].addEventListener('mouseleave', function () {
    ICON[7].classList.replace("bi-telephone-fill", "bi-telephone");
});

LIST[25].addEventListener('mouseenter', function () {
    ICON[8].classList.replace("bi-envelope", "bi-envelope-fill");
});
LIST[25].addEventListener('mouseleave', function () {
    ICON[8].classList.replace("bi-envelope-fill", "bi-envelope");
});

LIST[26].addEventListener('mouseenter', function () {
    ICON[9].classList.replace("bi-people", "bi-people-fill");
});
LIST[26].addEventListener('mouseleave', function () {
    ICON[9].classList.replace("bi-people-fill", "bi-people");
});

LIST[27].addEventListener('mouseenter', function () {
    ICON[10].classList.replace("bi-telephone", "bi-telephone-fill");
});
LIST[27].addEventListener('mouseleave', function () {
    ICON[10].classList.replace("bi-telephone-fill", "bi-telephone");
});

LIST[28].addEventListener('mouseenter', function () {
    ICON[11].classList.replace("bi-person-plus", "bi-person-plus-fill");
});
LIST[28].addEventListener('mouseleave', function () {
    ICON[11].classList.replace("bi-person-plus-fill", "bi-person-plus");
});

LIST[29].addEventListener('mouseenter', function () {
    ICON[12].style.color = "#25D366";

});
LIST[29].addEventListener('mouseleave', function () {
    ICON[12].style.color = "#57626C";
});

LIST[30].addEventListener('mouseenter', function () {
    ICON[13].style.color = "#229ED9";
});
LIST[30].addEventListener('mouseleave', function () {
    ICON[13].style.color = "#57626C";
});

LIST[31].addEventListener('mouseenter', function () {
    ICON[14].style.color = "#c13584";
});
LIST[31].addEventListener('mouseleave', function () {
    ICON[14].style.color = "#57626C";
});


let service = parseInt(window.getComputedStyle(BOX[22]).width);
PARAGRAGH[11].addEventListener("mouseenter", function () {
    BOX[22].style.width = `${service * 1.5}px`;
});
PARAGRAGH[11].addEventListener("mouseleave", function () {
    BOX[22].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[24]).width);
PARAGRAGH[12].addEventListener("mouseenter", function () {
    BOX[24].style.width = `${service * 1.3}px`;
});
PARAGRAGH[12].addEventListener("mouseleave", function () {
    BOX[24].style.width = `${service}px`;
});

service = parseInt(window.getComputedStyle(BOX[26]).width);
PARAGRAGH[13].addEventListener("mouseenter", function () {
    BOX[26].style.width = `${service * 1.5}px`;
});
PARAGRAGH[13].addEventListener("mouseleave", function () {
    BOX[26].style.width = `${service}px`;
});
