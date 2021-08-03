

   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-links');
   const navLinks = document.querySelectorAll('.nav-links li');
   const header = document.querySelector('header');
  
 

   const navSlide = () => {
 

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        header.classList.toggle('header-active');

        navLinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`;
                   
                }
            });
            //burger animation
        burger.classList.toggle('toggle');

    });
   
}
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY>0); 
    
});


navSlide();

