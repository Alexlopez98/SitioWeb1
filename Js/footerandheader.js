async function loadHTML(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Error cargando ${file}`);
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "../header.html");
    loadHTML("footer", "../footer.html");
});
