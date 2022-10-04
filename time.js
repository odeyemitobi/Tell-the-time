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


    //  Change background

    let bg;

    const userName = "IT'S CURRENTLY";
    const user = document.getElementById("User");

    // console.log(user);
    if (h < 8 && session === "AM") {
        bg = `url(https://source.unsplash.com/G_a9JhmiZFk)`;
        user.innerHTML = `GOOD MORNING ${userName}`; 
    } else if (h < 11 && session === "AM") {
        bg =  `url(https://source.unsplash.com/XJnG9OsmS2c)`;
        user.innerHTML = `GOOD DAY ${userName}`;
    } else if (h < 8 && session === "PM") {
        bg =  `url(https://source.unsplash.com/sKXLdjfIv9w)`;
        user.innerHTML = `GOOD AFTERNOON, ${userName}`;
    } else {
        bg =  `url(https://source.unsplash.com/toX2sYnycCw)`;
        user.innerHTML = `GOOD NIGHT, ${userName}`;
    }

    // insert bg img
    const body=document.querySelector("body");

    body.style.background =`${bg} center/cover`;
}