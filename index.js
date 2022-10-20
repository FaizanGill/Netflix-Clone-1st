var tabbut = document.querySelectorAll(".tab-item");
var tabbutcontent = document.querySelectorAll(".tab-content-item");


function addcontent(e) {

    removeborder();    //It will remove border from all the tabs
    removecontent();   //it will remove all the tab content
    this.classList.add("tab-border");       // It will add border to current button

    //Add content to the current tapped button
    const content = document.querySelector(`#${this.id}-content`);
    console.log(content);
    content.classList.add("show");

}

function removeborder() {
    tabbut.forEach(item => item.classList.remove("tab-border"));
}
function removecontent() {
    tabbutcontent.forEach(item => item.classList.remove("show"));
}

tabbut.forEach(item => item.addEventListener("click", addcontent));

