function centerDiv() {
    let divs = document.querySelectorAll('.center-div');

    divs.forEach(div => {
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
    })
}

module.exports.centerDiv = centerDiv;