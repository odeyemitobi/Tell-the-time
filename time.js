window.addEventListener("DOMContentLoaded", showTime());

function showTime(){
    let date = new Date();

    //    date.setTime(50000);

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    //  const time = h + ":" + m + ":" + s + "" + "" + session;
    //  console.log(time);

    const time = `${h}:${m}<small>.${s}|${session}</small>`;

    document.getElementById("DisplayClock").innerHTML = time;
    setTimeout(showTime,1000)
}