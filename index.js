 document.getElementById('mobile-menu').addEventListener('click', function() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.toggle('active');
        });

       
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    this.classList.toggle('active');
                }
            });
        });

        
        document.addEventListener('click', function(e) {
            if (!e.target.matches('.dropdown a')) {
                dropdowns.forEach(dropdown => {
                    if (window.innerWidth <= 768) {
                        dropdown.classList.remove('active');
                    }
                });
            }
        });