window.addEventListener('scroll', onScroll)

function onScroll(){
    showNavOnScroll();
    showBackToTopOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2
    
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionTopReachOrPassedLineTargetLine = targetLine >= sectionTop;

    const sectionEndsAt = sectionTop + sectionHeight;

    const sectionEndPassedTargerLine = sectionEndsAt <= targetLine;

    const sectionBoundaries = sectionTopReachOrPassedLineTargetLine && !sectionEndPassedTargerLine;

    const sectionId = section.getAttribute('id');
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}`);

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}


function showNavOnScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll')
    }
    else{
        navigation.classList.remove('scroll')
    }
}

function showBackToTopOnScroll(){
    if(scrollY > 500){
        backToTop.classList.add('show')
    }
    else{
        backToTop.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services header,
#services .cards,
#services .card,
#about header,
#about .content`);

onScroll();



