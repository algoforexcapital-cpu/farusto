document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon (burger to cross)
            if (navLinks.classList.contains('active')) {
                mobileBtn.innerHTML = '✕';
            } else {
                mobileBtn.innerHTML = '☰';
            }
        });
    }

    // Interactive Parallax Background Blobs
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        
        const blobs1 = document.querySelectorAll('.blob-1');
        const blobs2 = document.querySelectorAll('.blob-2');
        
        blobs1.forEach(b => {
            b.style.marginLeft = `${xAxis}px`;
            b.style.marginTop = `${yAxis}px`;
        });
        blobs2.forEach(b => {
            b.style.marginLeft = `${xAxis * -1.5}px`;
            b.style.marginTop = `${yAxis * -1.5}px`;
        });
    });

    // Header Scroll State
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // Active link highlighting based on current page
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    const menuLength = menuItems.length;
    
    let foundActive = false;
    for (let i = 0; i < menuLength; i++) {
        if (menuItems[i].href === currentLocation) {
            menuItems[i].classList.add('active');
            foundActive = true;
        }
    }
    
    // If we're on root path or index.html, highlight Home
    if (!foundActive && (currentLocation.endsWith('/') || currentLocation.endsWith('index.html'))) {
        if (menuItems.length > 0) {
            menuItems[0].classList.add('active');
        }
    }
});
