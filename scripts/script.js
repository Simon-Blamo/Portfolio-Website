const nav = document.getElementById('navbar');
            const home = document.getElementById('homeLink');
            const about = document.getElementById('aboutLink');
            const project = document.getElementById('projectLink');
            const contact = document.getElementById('contactLink');
            const carousel = document.querySelector(".carousel");
            const arrowBtns = document.querySelectorAll(".wrapper i");
            let windowWidth = window.innerWidth;
            let firstCardWidth = (carousel.querySelector(".projectsCard").offsetWidth);
            let isDragging = false, startX, startScrollLeft;

            var typed = new Typed('#dynamic', {
                strings: ['Software Engineer.', 'Web Developer.', 'Cyber-Security Specialist.'],
                typeSpeed: 65,
                backSpeed: 20,
                loop: true,
                loopCount: Infinity,
            });

            function open() {
                home.className += "clear";
                about.className += "clear";
                project.className += "clear";
                contact.className += "clear";
                nav.className += "click";
            }

            window.addEventListener('scroll', function(){
                var scrolled = window.scrollY;
                if((scrolled >= (window.innerHeight)) && (scrolled < (window.innerHeight*2))){
                    home.classList.remove("active");
                    home.classList.add("non-active");
                    about.classList.add("active");
                    about.classList.remove("non-active");
                    project.classList.remove("active");
                    project.classList.add("non-active");
                    contact.classList.remove("active");
                    contact.classList.add("non-active");
                } else if ((scrolled >= (window.innerHeight*2)) && (scrolled < (window.innerHeight*2.25))){
                    home.classList.remove("active");
                    home.classList.add("non-active");
                    about.classList.remove("active");
                    about.classList.add("non-active");
                    project.classList.add("active");
                    project.classList.remove("non-active");
                    contact.classList.remove("active");
                    contact.classList.add("non-active");
                } else if  (scrolled >= (window.innerHeight*2.25)){
                    home.classList.remove("active");
                    home.classList.add("non-active");
                    about.classList.remove("active");
                    about.classList.add("non-active");
                    project.classList.remove("active");
                    project.classList.add("non-active");
                    contact.classList.add("active");
                    contact.classList.remove("non-active");
                } else {
                    home.classList.add("active");
                    home.classList.remove("non-active");
                    about.classList.remove("active");
                    about.classList.add("non-active");
                    project.classList.remove("active");
                    project.classList.add("non-active");
                    contact.classList.remove("active");
                    contact.classList.add("non-active");
                }
            });

            arrowBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    carousel.scrollLeft += btn.id == "left" ? (-windowWidth) : (windowWidth);
                })
            });

            const dragStart = (e) => {
                isDragging = true;
                carousel.classList.add("dragging")
                startX = e.pageX;
                startScrollLeft = carousel.scrollLeft;
            }

            const dragStop = (e) => {
                isDragging = false;
                carousel.classList.remove("dragging")
            }

            const dragging = (e) => {
                if (!isDragging) {
                    return;
                }
                carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
            }

            window.addEventListener("resize", () => {
                windowWidth =  window.innerWidth;
                firstCardWidth = (carousel.querySelector(".projectsCard").offsetWidth);
            });

            carousel.addEventListener("mousedown", dragStart);
            document.addEventListener("mouseup", dragStop);
            carousel.addEventListener("mousemove", dragging);