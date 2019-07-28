let getSliderContainer = document.getElementsByClassName("sliderContainer");
let getListContainer = document.getElementsByClassName("listContainer");
let getListItems = document.getElementsByClassName("listItems");

console.log(getListItems);

// getListItems[0].style.border = "1px solid black";



let pos = -175;
let posRestart = 50;

let scroll = () => {
    pos++;
    for (let i = 0; i < getListItems.length; i++) {
        getListItems[i].style.bottom = pos + "px";
    }

    if (pos > posRestart) {
        pos = (posRestart - 125) - pos;
    }
}

let callScroll = setInterval(scroll, 30);