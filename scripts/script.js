const nav = document.getElementById('navbar');
            const home = document.getElementById('homeLink');
            const about = document.getElementById('aboutLink');
            const project = document.getElementById('projectLink');
            const contact = document.getElementById('contactLink');
            const carousel = document.querySelector(".carousel");
            const arrowBtns = document.querySelectorAll(".wrapper i");
            const navCon = document.querySelector(".navContainer");
            let isDragging = false, startX, startScrollLeft;
            let windowWidth = window.innerWidth;

            var typed = new Typed('#dynamic', {
                strings: ['Software Engineer.', 'Web Developer.', 'Cyber-Security Specialist.'],
                typeSpeed: 65,
                backSpeed: 20,
                loop: true,
                loopCount: Infinity,
            });

            function myMenu(){
                const nav = document.getElementById("navbar");
                const x = document.getElementById("myLinks");
                const y  = document.querySelector(".icon");
                if (x.style.display === "none") {
                    nav.style.flexDirection = "column";
                    x.style.display = "block";
                    y.style.position = "absolute";
                } else {
                    x.style.display = "none";
                    nav.style.flexDirection = "row";
                    y.style.position = "relative";
                }
            }

            function myMenuClose() {
                const nav = document.getElementById("navbar");
                const x = document.getElementById("myLinks");
                const y  = document.querySelector(".icon");
                if(window.innerWidth <= 1000) {
                    x.style.display = "none";
                    nav.style.flexDirection = "row";
                    y.style.position = "relative";
                }
            }

            window.addEventListener('scroll', function(){
                var scrolled = window.scrollY;
                if((scrolled >= (window.innerHeight)) && (scrolled < (window.innerHeight*2))){
                    navCon.style.position = "sticky";
                    home.style.color = "#FFFAFA";
                    about.style.color = "coral";
                    project.style.color = "#FFFAFA";
                    contact.style.color = "#FFFAFA";
                } else if ((scrolled >= (window.innerHeight*2)) && (scrolled < (window.innerHeight*2.25))){
                    navCon.style.position = "sticky";
                    home.style.color = "#FFFAFA";
                    about.style.color = "#FFFAFA";
                    project.style.color = "coral";
                    contact.style.color = "#FFFAFA";
                } else if  (scrolled >= (window.innerHeight*2.25)){
                    navCon.style.position = "sticky";
                    home.style.color = "#FFFAFA";
                    about.style.color = "#FFFAFA";
                    project.style.color = "#FFFAFA";
                    contact.style.color = "coral"
                } else {
                    navCon.style.position = "absolute";
                    home.style.color = "coral";
                    about.style.color = "#FFFAFA";
                    project.style.color = "#FFFAFA";
                    contact.style.color = "#FFFAFA";
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
                const x = document.getElementById("myLinks");
                windowWidth = window.innerWidth;
                if(window.innerWidth > 1000) {
                    x.style.display = "inherit";
                } else if (window.innerWidth <= 1000) {
                    x.style.display = "none";
                }
            });

            carousel.addEventListener("mousedown", dragStart);
            document.addEventListener("mouseup", dragStop);
            carousel.addEventListener("mousemove", dragging);