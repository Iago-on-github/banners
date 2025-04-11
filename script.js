// full banners

const fullBanner = [
    {
        "image": "https://cdn.awsli.com.br/1920x1920/1791/1791543/banner/tmpvoltaasaulasfullbanner2-8991fbbba0.png",
        "link": "#"
    },
    {
        "image": "https://cdn.awsli.com.br/1920x1920/1791/1791543/banner/tmpvoltaasaulasfullbanner3-ee57a0cd02.png",
        "link": "#"
    }
];


for (let i = 0; i < fullBanner.length; i++) {
    let actuallyBanner = fullBanner[i];

    const select = $(".bannerCarousel").children().eq(i);
    select.find("img").attr('src', actuallyBanner.image);
    select.find("a").attr('href', actuallyBanner.link);    
}

$('.bannerCarousel').slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev">&#8592;</button>',
    nextArrow: '<button class="slick-next">&#8594;</button>'
});
