$(document).ready(function() {
    console.log("i love you");
    
    new fullpage('#fullPage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        scrollingSpeed: 1000
    });

    $('.portfolio').click(function() {
        //fullpage.scrollPage('.sec4', null, false);
        fullpage_api.moveTo(1);
        
        $('.ind1').css('width','50%');
        $('.ind2').css('width','0%');
        $('.ind3').css('width','0%');
    });



    $('.contact').click(function() {
        //fullpage.scrollPage('.sec4', null, false);
        fullpage_api.moveTo(4);
        
        $('.ind1').css('width','0%');
        $('.ind2').css('width','0%');
        $('.ind3').css('width','50%');
    });

});