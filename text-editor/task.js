const editor = document.getElementById("editor");
const btn = document.querySelector(".clear_all");

editor.addEventListener("keydown", () => {
    dataSave(editor.value);
});

btn.addEventListener("click", () => {
    editor.value = "";

    dataSave(editor.value);
});

function dataSave(text) {
    localStorage.setItem("toLoad", text);
};

window.addEventListener("load", () => {
    editor.value = localStorage.getItem("toLoad");
});

