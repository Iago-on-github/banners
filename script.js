// full banners

const fullBanner = [
    {
        "image": "https://cdn.awsli.com.br/1920x1920/1791/1791543/banner/tmpvoltaasaulasfullbanner2-8991fbbba0.png",
        "link": "#",
        "fullBannerMobile": "https://cdn.awsli.com.br/1791/1791543/arquivos/voltaasaulasFullbannerMobile1.png"
    },
    {
        "image": "https://cdn.awsli.com.br/1920x1920/1791/1791543/banner/tmpvoltaasaulasfullbanner3-ee57a0cd02.png",
        "link": "#",
        "fullBannerMobile": "https://cdn.awsli.com.br/1791/1791543/arquivos/voltaasaulasFullbannerMobile3.png"
    }
];

const bannersDepartment = [   
    {
        "image": "https://cf.shopee.com.br/file/sg-11134201-22090-qu157fj8fyhv09.jpg",
        "link": "#",
        "title": "Caderno Argolado"
    },
    {
        "image": "https://cf.shopee.com.br/file/7ad229cb111dabf0dc83e3d79ce78b18",
        "link": "#",
        "title": "Lancheira"
     
    },
    {
        "image": "https://cf.shopee.com.br/file/5cb63f1031a62823fa0d60e78d5abf18",
        "link": "#",
        "title": "Lápis de Cor"
    },
    {
        "image": "https://cf.shopee.com.br/file/b00ab4db44a0154a13710a0c73f2a7e4",
        "link": "#",
        "title": "Mochila"
     
    },
    {
        "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRCnCae6WERs2lhoIG71oef8dBlLYBhGmXWVSdGpkaJzcBiTUlDFWJMEzyMjuH4iYkd3_8pRDkMIr8BYN2OHovOGkWzMaJQ&usqp=CAY",
        "link": "#",
        "title": "Hidrocor"
    },
    {
        "image": "https://cf.shopee.com.br/file/65209401bbac4cb72676f53d18d557a2",
        "link": "#",
        "title": "Estojo"
    },
    {
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWq5nEPzxzK_tPY0ifhG3ScY_7laV7-Xk2yeD8sg0AeZof2T_feHUILq5iRdjemHaUvy7S5KbOo3VeQzanXq3OPTq4IrQvcGct7pw7lU7L&usqp=CAE",
        "link": "#",
        "title": "Borrachas"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSan7mcc7XMCl_Iz_l-441mBA9qzMrDBV2SE7RLLB4FSI6jfurU-3atzhcas0S9mQfsFIr-9vj3T36fBLqq2Lj-3Jl9Z_6rLV82sNx_lVyav3PEshdCVGhL&usqp=CAE",
        "link": "#",
        "title": "Calculadora"
    }
];


for (let i = 0; i < fullBanner.length; i++) {
    let actualBanner = fullBanner[i];

    const select = $(".bannerCarousel").children().eq(i); // catch one children of 'bannerCarousel' (in looping)

    if (window.innerWidth > 667) {
        select.find("img").attr('src', actualBanner.image);
        select.find("a").attr('href', actualBanner.link);   
    } else {
        select.find("img").attr('src', actualBanner.fullBannerMobile);
    }
}

$('.bannerCarousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev">&#8592;</button>',
    nextArrow: '<button class="slick-next">&#8594;</button>',
    responsive: [
        {
            breakpoint: 667,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});

// banners of department

for (let i = 0; i < bannersDepartment.length; i++) {
    let actualBanner = bannersDepartment[i];

    const select = $(".bannerCarouselDepartments").children().eq(i);

    select.find("img").attr('src', actualBanner.image);
    select.find("p").text(actualBanner.title);
    select.find("a").attr('href', actualBanner.link);
}

$('.bannerCarouselDepartments').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    // prevArrow: '<button class="slick-prev-banner">&#8592;</button>',
    // nextArrow: '<button class="slick-next-banner">&#8594;</button>',
    responsive: [
        {
            breakpoint: 667,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                speed: 300,
                infinite: true
            }
        },
    ]
});

