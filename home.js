const cards = document.querySelectorAll(".off");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("on");

        }

    });

});

cards.forEach((card) => {

    observer.observe(card);

});