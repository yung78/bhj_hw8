const editor = document.getElementById("editor");
const btn = document.querySelector(".clear_all");
let saveText = "";

editor.addEventListener("keydown", () => {
    saveText = editor.value;

    dataSave();
});

btn.addEventListener("click", () => {
    saveText = "";
    editor.value = "";

    dataSave();
});

function dataSave() {
    let toLoad = JSON.stringify(saveText);
    localStorage.setItem("toLoad", toLoad);
};

window.addEventListener("load", () => {
    let loadItem = JSON.parse(localStorage.getItem("toLoad"));
    editor.value = loadItem;
});

