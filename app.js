window.addEventListener('load', function () {


});

function showWorkData(index) {
    var data;
    var btnText;

    switch (index) {
        case 1:
            console.log("1");
            data = document.getElementById("mainWorkInfo");
            btnText = document.getElementById("mainWorkBtn");
            break;

        case 2:
            data = document.getElementById("oldWorkInfo-1");
            btnText = document.getElementById("oldWorkBtn-1");
            break;

        case 3:
            data = document.getElementById("oldWorkInfo-2");
            btnText = document.getElementById("oldWorkBtn-2");
            break;
        case 4:
            data = document.getElementById("oldWorkInfo-3");
            btnText = document.getElementById("oldWorkBtn-3");
            break;

        default:
            break;
    }

    console.log(data);

    if (data.style.display === "none") {

        console.log("AAA");
        data.style.display = "block";
        btnText.innerHTML = "Close";
    }
    else {

        data.style.display = "none";
        btnText.innerHTML = "Learn more...";
    }
}

function modifyWorkInfo(data, btnText) {

}