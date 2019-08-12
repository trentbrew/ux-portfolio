$(document).ready(function() {
    console.log("i love you");
    
    new fullpage('#fullPage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        scrollingSpeed: 2000
    });
});