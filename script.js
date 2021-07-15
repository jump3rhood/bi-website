function getYear(){
    const year = document.querySelector('#year');
    const date = new Date();
    const currentYear = date.getFullYear();
    year.innerText = currentYear;
}
getYear();
function navAnimate(){
    const toggler = document.getElementById('nav__toggler');
    const navBar = document.querySelector('.nav__items');
    const navLinks = document.querySelectorAll('.nav__items li');
    toggler.addEventListener('click', ()=>{
        toggler.classList.toggle('active');
        navBar.classList.toggle('open');

        // animate links 
        navLinks.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.4}s`;
            }
        });
    })
}
navAnimate();

function stickyScroll()
{
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener('scroll',()=>{
        let currentScroll = window.pageYOffset;

        if(currentScroll<=0){
            body.classList.remove("scroll-up");
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains("scroll-down")
        ) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    })

}
stickyScroll();