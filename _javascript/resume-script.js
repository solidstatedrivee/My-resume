// alert("This script is working");



let getImage = document.getElementsByClassName("enlargeImage");
let getModalFullSizeImage = document.getElementsByClassName("modalFullSizeImage");
let getFullSizeImage = document.getElementsByClassName("fullSizeImage");
// console.log(getModalFullSizeImage[0]);

for (let i = 0; i < getImage.length; i++) {
    getImage[i].addEventListener("click", function () {
        console.log(getImage[i]);
        for (let i = 0; i < getModalFullSizeImage.length; i++) {
            // console.log(getModalFullSizeImage[i]);
            getModalFullSizeImage[i].style.display = "block";

        }
        getFullSizeImage[0].style.backgroundImage = `url(${getImage[i].attributes[0].nodeValue})`;
        console.log(getFullSizeImage[0]);
        // console.log(getModalFullSizeImage[i]);
    });
}

getModalFullSizeImage[0].addEventListener("click", function () {
    for (let i = 0; i < getModalFullSizeImage.length; i++) {
        if (getModalFullSizeImage[i].style.display == "block") {
            getModalFullSizeImage[i].style.display = "none";
        }
        // console.log(getModalFullSizeImage[i]);
    }
})





