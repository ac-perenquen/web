document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".container");
    if (!container) return;

    const main = container.querySelector("main");
    if (!main) return;

    try {
        const response = await fetch("./index.html");
        if (!response.ok) throw new Error("No se pudo cargar index.html");
        const htmlText = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");

        const areaLeft = doc.querySelector(".area_left");
        if (areaLeft) {
            main.insertAdjacentHTML("beforebegin", areaLeft.outerHTML);
        }
    } catch (err) {
        console.error("Error al inyectar area_left:", err);
    }
});
