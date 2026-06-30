document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       MOBILE NAVIGATION DRAWER
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            if (mobileDrawer.classList.contains('open')) {
                icon.className = 'fa-solid fa-xmark';
                document.body.classList.add('no-scroll');
            } else {
                icon.className = 'fa-solid fa-bars';
                document.body.classList.remove('no-scroll');
            }
        });

        // Close drawer when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                menuToggle.querySelector('i').className = 'fa-solid fa-bars';
                document.body.classList.remove('no-scroll');
            });
        });
    }

    /* ==========================================================================
       ACTIVE NAV LINK HIGHLIGHT ON SCROLL
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    /* ==========================================================================
       PROJECTS FILTERING SYSTEM
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Set active class
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category').split(' ');
                    
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.classList.remove('hide');
                        // Fade in animation trigger
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.4s ease';
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        });
    }

    /* ==========================================================================
       CONTACT FORM ANIMATED SUBMIT MOCKUP
       ========================================================================== */
    const contactForm = document.getElementById('portfolio-contact-form');
    const successNotification = document.getElementById('success-notification');
    const formSubmitBtn = document.getElementById('form-submit-btn');

    if (contactForm && successNotification) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload
            
            // Set sending state
            formSubmitBtn.disabled = true;
            formSubmitBtn.textContent = 'Sending message...';

            // Simulate server response latency
            setTimeout(() => {
                // Show success screen overlay animation
                successNotification.classList.add('show');
                
                // Clear fields
                contactForm.reset();
                formSubmitBtn.disabled = false;
                formSubmitBtn.textContent = 'Send Message';
            }, 1200);
        });
    }

    /* ==========================================================================
       MICRO-INTERACTIVE EFFECTS (Glow follow or reveal)
       ========================================================================== */
    // Add dynamic interactive hover shadows on elements
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
