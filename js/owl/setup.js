$('.owl-carousel').owlCarousel({
    loop:true, //permite navegar de forma infinita no carrosel
    margin:5, //margem entre um quadrado e outro
    nav:false,
    responsive:{ //elementos se comportam de acordo com o tamanho da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})