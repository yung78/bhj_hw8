const popup = document.querySelector(".modal");
const close = document.querySelector(".modal__close.modal__close_times");

console.log(document.cookie);
console.log(navigator.cookieEnabled );

if (!document.cookie.includes("show_popup")) {
    setTimeout((() => popup.className += " modal_active"), 1000);
};

close.addEventListener ("click", (e) => {
    popup.className = "modal";

    setCookie("SameSite", "Lax");
    setCookie("show_popup", "true");
    setCookie("max-age", "30");

    console.log(document.cookie); // в хроме не работало
});

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value);
};
