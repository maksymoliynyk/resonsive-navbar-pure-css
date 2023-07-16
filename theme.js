const themes = [
    "dark",
    "light"
];

const theme = localStorage.getItem("theme") ||
        localStorage.setItem("theme", themes[0]);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function SetTheme(){
    let current = localStorage.getItem("theme");
    document.getElementById(`${current}Icon`).style.display = "none";
    let next = themes.indexOf(current) ? 0 : 1;
    bodyClass.replace(current, themes[next]);
    localStorage.setItem("theme", themes[next]);
    document.getElementById(`${themes[next]}Icon`).style.display = "block";
}

document.getElementById("themeButton").onclick = SetTheme;