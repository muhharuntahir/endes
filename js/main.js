$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});


function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Baca selengkapnya";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Baca lebih sedikit";
        moreText.style.display = "inline";
    }
}

function myPromo(){
    const buttonPromo = document.getElementById("btn-promo");
    const promo = document.getElementById("promosi");

    if(promo.style.display === "block"){
        promo.style.display = "none";
        buttonPromo.innerText = "Lihat Semua Promo"
    }else{
        promo.style.display = "block";
        buttonPromo.innerText = "Lihat Sedikit Promo"
    }
}
