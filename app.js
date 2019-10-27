$(document).ready(function() {
    console.log("i love you");

    const heroImg = $('.hero-image');
    const heroText = $('.hero-text');
    const whiteContainer = $('.white-container');
    const pageContainer = $('.page-container');
    const projectContainer = $('.project-container');
    const projectHeader = $('.study-banner');
    const download = $('.download');
    const back = $('.back');
    const back2 = $('.back2');
    const portfolioLink = $('.portfolio');
    const resumeLink = $('.resume');
    const contactLink = $('.contact');
    const illustrationsLink = $('.illustrations');
    const nav = $('.nav');
    const social = $('.social-bubble');
    const studyBackdrop = $('.study-backdrop');
    const wave = $('.wave');
    const sectionNav = $('#fp-nav span');
    const projectHome = $('.project-home');
    const nextProject = $('.next-project');
    const next1 = $('.next1');
    const next2 = $('.next2');
    const next3 = $('.next3');
    const next4 = $('.next4');
    const next5 = $('.next5');
    const next6 = $('.next6');
    const next7 = $('.next7');

    const item1 = $('.item1');
    const item2 = $('.item2');
    const item3 = $('.item3');
    const item4 = $('.item4');
    const item5 = $('.item5');
    const item6 = $('.item6');
    const item7 = $('.item7');
    const item8 = $('.item8');
    const item9 = $('.item9');
    const item10 = $('.item10');
    const item11 = $('.item11');

    const greetings = document.querySelectorAll('#greetings path');

    for(let i = 0; i < greetings.length; i++) {
        console.log('letter ' + i + ' is ' + greetings[i].getTotalLength());
    }

    console.log(greetings);

    var dunGots = false;

    /*if(window.innerWidth > 768) {
        item1.hover(function() {
            $('.next-page-cover').css({
                'transition':'300ms',
                backgroundColor: '#3d70a6',
                height: '40px',
            });
        }, function() {
            if(!dunGots) {
                $('.next-page-cover').css({
                    height: '0px',
                });
            }
        });
    }*/

    item1.click(function() {
        dunGots = true;
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        /*setTimeout(function() {
            $('.next-page-cover').css({
                backgroundColor: '#3d70a6',
                height: '100%',
            });
        }, 1000);*/ 

        setTimeout(function() {
            window.open('floors.html',"_self");
        }, 1500); 
    });

    item2.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            window.open('drummerboi.html',"_self");
        }, 1500); 
    });

    item3.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            window.open('spotify.html',"_self");
        }, 1500); 
    });

    item4.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            window.open('material-study.html',"_self");
        }, 1500); 
    });

    item5.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('backpack-barber.html',"_self");
        }, 1500); 
    });

    item6.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('jquery-puzzle.html',"_self");
        }, 1500); 
    });

    item7.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('monday-report.html',"_self");
        }, 1500); 
    });

    item8.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('quickkeys.html',"_self");
        }, 1500); 
    });

    item9.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('walls.html',"_self");
        }, 1500); 
    });

    item10.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            //console.log('open resume link');
            window.open('coin-tracker.html',"_self");
        }, 1500); 
    });

    item11.click(function() {
        $('.next-page-cover').css({
            'transition': '1s',
            backgroundColor: '#e0e0e0',
            //height: '100%',
        });

        $('.next-page-cover h3').css({
            'opacity':'0'
        });

        whiteContainer.css({
            width: '100%',
            //background: '#e0e0e0'
        });

        wave.css({
            backgroundPositionY: '50%',
            //background: '#e0e0e0'
        });

        sectionNav.css({
            opacity: 0
        });
                
        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        setTimeout(function() {
            //console.log('open resume link');
            window.open('booksmart.html',"_self");
        }, 1500); 
    });

    next1.click(function() {
        $('body').css({
            background: "#181818"
        });
        $('.study-container').css({
            opacity: 0
        });
        pageContainer.css({
            marginTop: '180px',
            opacity: 0
        });

        nextProject.css({
            opacity: 0
        });

        studyBackdrop.css({
            //height: '0px',
            opacity: 0
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 0
        });

        projectHeader.css({
            marginTop: '40px',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '40px'
        });
        
        back.css({
            opacity: 0,
            //marginTop: '40px'
        });

        social.css({
            opacity: 0,
            //marginTop: '40px'
        });

        $('body').css('background-color','#e0e0e0');

        setTimeout(function() {
            window.open('drummerboi.html',"_self");
        }, 1500); 
    });

    next2.click(function() {
        pageContainer.css({
            marginTop: '180px',
            opacity: 0
        });

        nextProject.css({
            opacity: 0
        });

        studyBackdrop.css({
            //height: '0px',
            opacity: 0
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 0
        });

        projectHeader.css({
            marginTop: '40px',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '40px'
        });
        
        back.css({
            opacity: 0,
            //marginTop: '40px'
        });

        social.css({
            opacity: 0,
            //marginTop: '40px'
        });

        $('body').css('background-color','#e0e0e0');

        setTimeout(function() {
            window.open('spotify.html',"_self");
        }, 1500); 
    });

    next3.click(function() {
        pageContainer.css({
            marginTop: '180px',
            opacity: 0
        });

        nextProject.css({
            opacity: 0
        });

        studyBackdrop.css({
            //height: '0px',
            opacity: 0
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 0
        });

        projectHeader.css({
            marginTop: '40px',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '40px'
        });
        
        back.css({
            opacity: 0,
            //marginTop: '40px'
        });

        social.css({
            opacity: 0,
            //marginTop: '40px'
        });

        $('body').css('background-color','#e0e0e0');

        setTimeout(function() {
            window.open('material-study.html',"_self");
        }, 1000); 
    });

    next4.click(function() {
        pageContainer.css({
            marginTop: '180px',
            opacity: 0
        });

        nextProject.css({
            opacity: 0
        });

        studyBackdrop.css({
            //height: '0px',
            opacity: 0
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 0
        });

        projectHeader.css({
            marginTop: '40px',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '40px'
        });
        
        back.css({
            opacity: 0,
            //marginTop: '40px'
        });

        social.css({
            opacity: 0,
            //marginTop: '40px'
        });

        $('body').css('background-color','#e0e0e0');

        setTimeout(function() {
            window.open('backpack-barber.html',"_self");
        }, 1000); 
    });

    next5.click(function() {
        pageContainer.css({
            marginTop: '180px',
            opacity: 0
        });

        nextProject.css({
            opacity: 0
        });

        studyBackdrop.css({
            //height: '0px',
            opacity: 0
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 0
        });

        projectHeader.css({
            marginTop: '40px',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '40px'
        });
        
        back.css({
            opacity: 0,
            //marginTop: '40px'
        });

        social.css({
            opacity: 0,
            //marginTop: '40px'
        });

        $('body').css('background-color','#e0e0e0');

        setTimeout(function() {
            window.open('jquery-puzzle.html',"_self");
        }, 1000); 
    });

    next6.click(function() {
        pageContainer.css({
            marginTop: '180px',
            opacity: 0
        });

        nextProject.css({
            opacity: 0
        });

        studyBackdrop.css({
            //height: '0px',
            opacity: 0
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 0
        });

        projectHeader.css({
            marginTop: '40px',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '40px'
        });
        
        back.css({
            opacity: 0,
            //marginTop: '40px'
        });

        social.css({
            opacity: 0,
            //marginTop: '40px'
        });

        $('body').css('background-color','#e0e0e0');

        setTimeout(function() {
            window.open('monday-report.html',"_self");
        }, 1000); 
    });

    next7.click(function() {
        pageContainer.css({
            marginTop: '180px',
            opacity: 0
        });

        nextProject.css({
            opacity: 0
        });

        studyBackdrop.css({
            //height: '0px',
            opacity: 0
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 0
        });

        projectHeader.css({
            marginTop: '40px',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '40px'
        });
        
        back.css({
            opacity: 0,
            //marginTop: '40px'
        });

        social.css({
            opacity: 0,
            //marginTop: '40px'
        });

        $('body').css('background-color','#e0e0e0');

        setTimeout(function() {
            window.open('quickkeys.html',"_self");
        }, 1000); 
    });

    whiteContainer.css({
        width: '80%'
    });

    studyBackdrop.css({
        height: '70vh'
    });

    back2.css({
        opacity: 1,
        marginTop: '0px'
    });

    projectHome.css({
        background: '#e0e0e0'
    });

    if(window.innerWidth <= 768) {
        whiteContainer.css({
            height: '60px'
        });
    }

    setTimeout(function() {
        $('.hero-text').css({
            opacity: 1,
            //marginLeft: '80px',
            //marginRight: '50px'
        });

        projectHeader.css({
            marginTop: '0px',
            opacity: 1
        });

        pageContainer.css({
            marginTop: '140px',
            opacity: 1
        });

        sectionNav.css({
            //'transform':'translateX(150px)'
        });
    
    }, 500);

    setTimeout(function() {
        heroText.css({
            opacity: 1,
            //marginLeft: '80px'
        });

        heroImg.css({
            opacity: 1,
            //marginLeft: '-80px'
        });

        nav.css({
            opacity: 1
        });

        social.css({
            opacity: 1
        });

        back.css({
            opacity: 0.8,
            marginTop: '0px'
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 1
        });

        download.css({
            opacity: 1,
            marginTop: '0px'
        });

        sectionNav.css({
            //filter: 'invert(1) !important'
        });
    
    }, 1000);

    setTimeout(function() {
        console.log('open backdrop');
        /*studyBackdrop.css({
            'height':'70vh'
        });*/
    }, 2000);

    new fullpage('#fullPage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        scrollingSpeed: 1000,
        slidesNavigation: true,
        slidesNavPosition: 'bottom'
    });

        //----------for mobile----------

        if(window.innerWidth <= 768) {
            console.log('currently on mobile');

            item1.click(function() {
                $('.next-page-cover').css({
                    'transition': '1s',
                    backgroundColor: '#181818',
                    height: '100%',
                });
            });
            item2.click(function() {
                $('.next-page-cover').css({
                    'transition': '1s',
                    backgroundColor: '#181818',
                    height: '100%',
                });
            });
            item3.click(function() {
                $('.next-page-cover').css({
                    'transition': '1s',
                    backgroundColor: '#181818',
                    height: '100%',
                });
            });
            item4.click(function() {
                $('.next-page-cover').css({
                    'transition': '1s',
                    backgroundColor: '#181818',
                    height: '100%',
                });
            });
            item5.click(function() {
                $('.next-page-cover').css({
                    'transition': '1s',
                    backgroundColor: '#181818',
                    height: '100%',
                });
            });
            item6.click(function() {
                $('.next-page-cover').css({
                    'transition': '1s',
                    backgroundColor: '#181818',
                    height: '100%',
                });
            });
            item7.click(function() {
                $('.next-page-cover').css({
                    'transition': '1s',
                    backgroundColor: '#181818',
                    height: '100%',
                });
            });
            item8.click(function() {
                $('.next-page-cover').css({
                    'transition': '1s',
                    backgroundColor: '#181818',
                    height: '100%',
                });
            });
    
            //fullpage_api.setAutoScrolling(false);
        }
    
    
    
    
    
        //----------end of mobile scripts----------

    portfolioLink.click(function() {
        fullpage_api.setAutoScrolling(true);

        fullpage_api.moveTo(1);
        
        $('.ind1').css('width','50%');
        $('.ind2').css('width','0%');
        $('.ind3').css('width','0%');
        $('.ind4').css('width','0%');
    });

    resumeLink.click(function() {
        $('.ind1').css('width','0%');
        $('.ind2').css('width','0%');
        $('.ind3').css('width','50%');
        $('.ind4').css('width','0%');

        $('.next-page-cover').css({
            height: '100%',
        });

        wave.css({
            backgroundPositionY: '180%'
        });

        whiteContainer.css({
            //width: '0%'
        });

        nav.css({
            opacity: 0
        });

        social.css({
            opacity: 0
        });

        wave.css({
            //backgroundPositionY: '50%'
        });

        setTimeout(function() {
            console.log('open resume link');
            window.open('resume.html',"_self");
        }, 1500);
    });

    back.click(function() {

        if(window.innerWidth <=768) {
            $('body').css('background-color','#181818');

            setTimeout(function() {
                window.open('index.html', '_self');
            }, 1000);
        }
        else {
            $('body').css('background-color','#181818');

            studyBackdrop.css({
                height: '100vh'
            });

            setTimeout(function() {
                window.open('index.html', '_self');
            }, 1000);
        }

        pageContainer.css({
            marginTop: '180px',
            opacity: 0
        });

        nextProject.css({
            opacity: 0
        });

        studyBackdrop.css({
            //height: '0px',
            opacity: 0
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 0
        });

        projectHeader.css({
            marginTop: '40px',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '40px'
        });
        
        back.css({
            opacity: 0,
            marginTop: '40px'
        });

        social.css({
            opacity: 0,
            marginTop: '40px'
        });
    });
    
    back2.click(function() {
        if(window.innerWidth <=768) {
            $('body').css('background-color','#181818');

            setTimeout(function() {
                window.open('index.html', '_self');
            }, 1000);
        }
        else {
            $('body').css('background-color','#181818');

            setTimeout(function() {
                window.open('index.html', '_self');
            }, 1000);
        }

        pageContainer.css({
            marginTop: '180px',
            opacity: 0
        });

        studyBackdrop.css({
            height: '0px'
        });

        projectContainer.css({
            marginTop: '40px',
            opacity: 0
        });

        projectHeader.css({
            marginTop: '40px',
            opacity: 0
        });

        download.css({
            opacity: 0,
            marginTop: '40px'
        });
        
        back2.css({
            opacity: 0,
            marginTop: '40px'
        });

        social.css({
            opacity: 0,
            marginTop: '40px'
        });
    });

    contactLink.click(function() {
        fullpage_api.setAutoScrolling(true);
        fullpage_api.moveTo(7);
        
        $('.ind1').css('width','0%');
        $('.ind2').css('width','0%');
        $('.ind3').css('width','0%');
        $('.ind4').css('width','50%');
    });

    illustrationsLink.click(function() {
        fullpage_api.setAutoScrolling(true);
        fullpage_api.moveTo(6);
        
        $('.ind1').css('width','0%');
        $('.ind2').css('width','50%');
        $('.ind3').css('width','0%');
        $('.ind4').css('width','0%');
    });

});