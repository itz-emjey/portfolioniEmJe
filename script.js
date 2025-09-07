// Dynamic text rotation
        const dynamicText = document.querySelector('.dynamic-text');
        const texts = ['EmJe','Programmer', 'Developer', 'Designer'];
        let currentIndex = 0;

        function rotateText() {
            dynamicText.style.opacity = '0';
            dynamicText.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                dynamicText.textContent = texts[currentIndex];
                dynamicText.style.opacity = '1';
                dynamicText.style.transform = 'translateY(0)';
            }, 300);
        }

        dynamicText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        setInterval(rotateText, 2000);

        // Hamburger menu functionality
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-menu a');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Smooth scrolling for all navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0s';
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-item, .project-card').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });

        // Header shadow on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
        });