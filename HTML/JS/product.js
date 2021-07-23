
function changeImage(imgID){
    var srcImage = document.getElementById(imgID).getAttribute("src");
    resetBorder();
    document.getElementById("img-show").setAttribute("src",srcImage)
    document.getElementById(imgID).setAttribute("style","border: 2px solid #f1a347");
}
function resetBorder() {
    document.getElementById("img1").removeAttribute("style");
    document.getElementById("img2").removeAttribute("style");
    document.getElementById("img3").removeAttribute("style");
    document.getElementById("img4").removeAttribute("style");
}