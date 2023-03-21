const timeH1 = document.querySelector("#time_h1");
function time() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    timeH1.innerHTML = `${hour}:${minute}:${second}`
}
time();
setInterval(time, 1000);