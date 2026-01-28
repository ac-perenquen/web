function updateClock() {
    const now = new Date();

    const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    
    const diaSemana = dias[now.getDay()];

    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();

    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');

    const fechaStr = `${diaSemana}, ${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
    document.getElementById("clockObj").textContent = fechaStr;
}
updateClock();
setInterval(updateClock, 1000);
