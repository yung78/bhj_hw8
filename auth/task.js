const form = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const btn = document.getElementById("signin__btn");
const sign = document.getElementById("signin");
const id = document.getElementById("user_id");
const xhr = new XMLHttpRequest();

function httpRequest (request, url, body) {
    xhr.open(request, url);
    xhr.send(body);
};

function dataSave(saveText) {
    let save = JSON.stringify(saveText);
    localStorage.setItem("toLoad", save);
};

function signout() {
    const logout = document.getElementById("signout__btn");
    logout.onclick = (() => {
        dataSave("");
        location.reload();
    });
};

btn.onclick = (() => {
    let body = new FormData(form);
    let url = "https://students.netoservices.ru/nestjs-backend/auth";

    xhr.addEventListener("load", () => {
        console.log(xhr.responseText);
        let response = JSON.parse(xhr.responseText);
        if (response.success) {
            sign.className = "signin";
            id.textContent = response["user_id"];
            welcome.className += "welcome_active";

            signout();
            dataSave(response["user_id"]);
        } else {
            confirm("Неверный логин/пароль");
            for (el of document.querySelectorAll(".control")) {
                el.value = ""
            };
        };
    });

    httpRequest("POST", url, body);

    return false;
});

window.addEventListener("load", () => {
    let loadItem = JSON.parse(localStorage.getItem("toLoad")) || 0;
    if (loadItem) {
        sign.className = "signin";
        id.textContent = loadItem;
        welcome.className += "welcome_active";
        signout();
    };
});
