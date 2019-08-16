$(document).ready(function() {
    console.log("i love you");

    const heroImg = $('.hero-image');
    const heroText = $('.hero-text');
    const whiteContainer = $('.white-container');
    const pageContainer = $('.page-container');
    const studyContainer = $('.study-container');
    const download = $('.download');
    const back = $('.back');
    const portfolioLink = $('.portfolio');
    const resumeLink = $('.resume');
    const contactLink = $('.contact');
    const nav = $('.nav');
    const social = $('.social-bubble');

    const item1 = $('.item1');
    const item2 = $('.item2');
    const item3 = $('.item3');
    const item4 = $('.item4');
    const item5 = $('.item5');
    const item6 = $('.item6');
    const item7 = $('.item7');
    const item8 = $('.item8');

    item1.click(function() {
        $('.next-page-cover').css({
            backgroundColor: '#88A8C6',
            height: '100%',
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('floors.html',"_self");
        }, 1000); 
    });

    item2.click(function() {
        $('.next-page-cover').css({
            backgroundColor: '#C0D7D6',
            height: '100%',
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('floors.html',"_self");
        }, 1000); 
    });

    item3.click(function() {
        $('.next-page-cover').css({
            backgroundColor: '#16B246',
            height: '100%',
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('floors.html',"_self");
        }, 1000); 
    });

    item4.click(function() {
        $('.next-page-cover').css({
            backgroundColor: '#2B98EC',
            height: '100%',
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('floors.html',"_self");
        }, 1000); 
    });

    item5.click(function() {
        $('.next-page-cover').css({
            backgroundColor: '#FB8C6A',
            height: '100%',
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('floors.html',"_self");
        }, 1000); 
    });

    item6.click(function() {
        $('.next-page-cover').css({
            backgroundColor: '#7C7C7C',
            height: '100%',
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('floors.html',"_self");
        }, 1000); 
    });

    item7.click(function() {
        $('.next-page-cover').css({
            backgroundColor: '#FDB044',
            height: '100%',
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('floors.html',"_self");
        }, 1000); 
    });

    item8.click(function() {
        $('.next-page-cover').css({
            backgroundColor: '#594FCC',
            height: '100%',
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('floors.html',"_self");
        }, 1000); 
    });

    whiteContainer.css({
        width: '80%'
    });

    setTimeout(function() {
        heroImg.css({
            opacity: 1,
            marginLeft: '80px',
            marginRight: '50px'
        });
    
    }, 500);

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
    
    }, 1000);

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

    studyContainer.css({
        marginTop: '0px',
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

        studyContainer.css({
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