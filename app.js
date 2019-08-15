$(document).ready(function() {
    console.log("i love you");

    const heroImg = $('.hero-image');
    const heroText = $('.hero-text');
    const whiteContainer = $('.white-container');
    const pageContainer = $('.page-container');
    const download = $('.download');
    const back = $('.back');
    const portfolioLink = $('.portfolio');
    const resumeLink = $('.resume');
    const contactLink = $('.contact');
    const nav = $('.nav');
    const social = $('.social-bubble');

    whiteContainer.css({
        width: '80%'
    });

    setTimeout(function() {
        heroImg.css({
            opacity: 1,
            marginLeft: '80px',
            marginRight: '50px'
        });
    
    }, 1000);

    setTimeout(function() {
        heroText.css({
            opacity: 1,
            //marginLeft: '80px'
        });

        nav.css({
            opacity: 1
        });

        social.css({
            opacity: 1
        });
    
    }, 2000);

    new fullpage('#fullPage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        scrollingSpeed: 1000
    });

    pageContainer.css({
        marginTop: '140px',
        opacity: 1
    });

    download.css({
        opacity: 1,
        marginTop: '0px'
    });
    
    back.css({
        opacity: 1,
        marginTop: '0px'
    });

    portfolioLink.click(function() {
        fullpage_api.setAutoScrolling(true);

        fullpage_api.moveTo(1);
        
        $('.ind1').css('width','50%');
        $('.ind2').css('width','0%');
        $('.ind3').css('width','0%');
    });

    resumeLink.click(function() {
        $('.ind1').css('width','0%');
        $('.ind2').css('width','50%');
        $('.ind3').css('width','0%');

        $('.next-page-cover').css({
            height: '100%',
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('resume.html',"_self");
        }, 1000);
    });

    back.click(function() {
        pageContainer.css({
            marginTop: '100vh',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '50px'
        });
        
        back.css({
            opacity: 0,
            marginTop: '50px'
        });

        $('body').css('background-color','white');

        setTimeout(function() {
            window.open('index.html', '_self');
        }, 1000);
    });

    contactLink.click(function() {
        fullpage_api.setAutoScrolling(true);
        fullpage_api.moveTo(4);
        
        $('.ind1').css('width','0%');
        $('.ind2').css('width','0%');
        $('.ind3').css('width','50%');
    });

});