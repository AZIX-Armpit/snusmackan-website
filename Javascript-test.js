//Globala Deklarationer

var i;
var slideIndex = 0;
var elements = document.getElementsByClassName("instagram-media");
var header = document.getElementById("numposts");
var btns = header.getElementsByClassName("numlinks");

//MainMenyn

function tab(evt, tabName) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
//SnusPostsMenyn

function cat(evt, catName) {
    var catcontent, catlinks;
    catcontent = document.getElementsByClassName("catcontent");
    for (i = 0; i < catcontent.length; i++) {
      catcontent[i].style.display = "none";
    }
    catlinks = document.getElementsByClassName("catlinks");
    for (i = 0; i < catlinks.length; i++) {
      catlinks[i].className = catlinks[i].className.replace(" active", "");
    }
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
  }

//Slideshow

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 2 seconds
  }

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "30vw";
    elements[i].style.padding = "10px";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "15vw";
    elements[i].style.padding = "0px";
  }
}
