
        AOS.init({
            duration: 1000,
            once: true
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu functionality
        const menuBtn = document.querySelector('.menu-btn-mobile');
        const sidebar = document.querySelector('.sidebar');
        const sidebarBackdrop = document.querySelector('.sidebar-backdrop');
        const closeBtn = document.querySelector('.close-btn');

        // Open menu
        menuBtn.addEventListener('click', () => {
            sidebar.style.right = '0';
            sidebarBackdrop.style.display = 'block';
            setTimeout(() => {
                sidebarBackdrop.style.opacity = '1';
            }, 10);
            document.body.style.overflow = 'hidden';
        });

        // Close menu
        function closeMenu() {
            sidebar.style.right = '-20em';
            sidebarBackdrop.style.opacity = '0';
            setTimeout(() => {
                sidebarBackdrop.style.display = 'none';
            }, 300);
            document.body.style.overflow = '';
        }

        closeBtn.addEventListener('click', closeMenu);
        sidebarBackdrop.addEventListener('click', closeMenu);

        // Close menu when clicking on a link
        const sidebarLinks = document.querySelectorAll('.sidebar a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
