$(document).ready(function() {
    console.log("i love you");
    
    new fullpage('#fullPage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        scrollingSpeed: 1000
    });

    $('.page-container').css({
        marginTop: '140px',
        opacity: 1
    });

    $('.download').css({
        opacity: 1,
        marginTop: '0px'
    });
    
    $('.back').css({
        opacity: 1,
        marginTop: '0px'
    });

    $('.portfolio').click(function() {
        fullpage_api.setAutoScrolling(true);

        fullpage_api.moveTo(1);
        
        $('.ind1').css('width','50%');
        $('.ind2').css('width','0%');
        $('.ind3').css('width','0%');
    });

    $('.resume').click(function() {
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

    $('.back').click(function() {
        $('.page-container').css({
            marginTop: '100vh',
            opacity: 0
        });

        $('.download').css({
            opacity: 0,
            marginTop: '50px'
        });
        
        $('.back').css({
            opacity: 0,
            marginTop: '50px'
        });

        $('body').css('background-color','white');

        setTimeout(function() {
            window.open('index.html', '_self');
        }, 1000);
    });

    $('.contact').click(function() {
        fullpage_api.setAutoScrolling(true);
        fullpage_api.moveTo(4);
        
        $('.ind1').css('width','0%');
        $('.ind2').css('width','0%');
        $('.ind3').css('width','50%');
    });

});