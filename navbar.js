       // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const closeMobileMenu = document.getElementById('close-mobile-menu');

        function openMobileMenu() {
            mobileMenu.classList.add('open');
            mobileOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenuFunc() {
            mobileMenu.classList.remove('open');
            mobileOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }

        mobileMenuBtn.addEventListener('click', openMobileMenu);
        closeMobileMenu.addEventListener('click', closeMobileMenuFunc);
        mobileOverlay.addEventListener('click', closeMobileMenuFunc);

        // Mobile dropdown functionality
        const mobileDropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
        
        mobileDropdownBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const target = document.getElementById(this.dataset.target);
                const arrow = this.querySelector('svg');
                
                // Close other submenus
                document.querySelectorAll('.mobile-submenu').forEach(submenu => {
                    if (submenu !== target) {
                        submenu.classList.remove('open');
                    }
                });
                
                // Reset other arrows
                document.querySelectorAll('.mobile-dropdown-btn svg').forEach(otherArrow => {
                    if (otherArrow !== arrow) {
                        otherArrow.style.transform = '';
                    }
                });
                
                // Toggle current submenu
                target.classList.toggle('open');
                
                // Rotate arrow
                if (target.classList.contains('open')) {
                    arrow.style.transform = 'rotate(180deg)';
                } else {
                    arrow.style.transform = '';
                }
            });
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
                closeMobileMenuFunc();
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 1024 && mobileMenu.classList.contains('open')) {
                closeMobileMenuFunc();
            }
        });