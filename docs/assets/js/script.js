function toggleGpts() {
    var gpts = document.getElementById('gptsDiv');
    if (gpts.style.display === 'none') {
        gpts.style.display = 'block';
    } else {
        gpts.style.display = 'none';
    }
}

function toggleWaifu() {
    var waifu = document.getElementById('waifuDiv');
    if (waifu.style.display === 'none') {
        waifu.style.display = 'block';
    } else {
        waifu.style.display = 'none';
    }
}

function toggleNsfw() {
    var nsfw = document.getElementById('nsfwDiv');
    if (nsfw.style.display === 'none') {
        nsfw.style.display = 'block';
    } else {
        nsfw.style.display = 'none';
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("imageContainer");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}