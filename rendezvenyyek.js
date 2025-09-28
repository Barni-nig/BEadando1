    document.addEventListener('DOMContentLoaded', function() {
           
            const sliders = document.querySelectorAll('.image-slider');
            
            sliders.forEach(slider => {
                const container = slider.querySelector('.slider-container');
                const images = slider.querySelectorAll('.slider-image');
                const prevBtn = slider.querySelector('.prev-btn');
                const nextBtn = slider.querySelector('.next-btn');
                const dots = slider.querySelectorAll('.dot');
                
                let currentIndex = 0;
                const totalImages = images.length;
                
                // Képváltás funkció
                function showImage(index) {
                    // Korlátozzuk az indexet a megfelelő tartományba
                    if (index < 0) {
                        index = totalImages - 1;
                    } else if (index >= totalImages) {
                        index = 0;
                    }
                    
                    // Frissítjük a pozíciót
                    container.style.transform = `translateX(-${index * 100}%)`;
                    
                    // Frissítjük az aktív pontot
                    dots.forEach(dot => dot.classList.remove('active'));
                    dots[index].classList.add('active');
                    
                    currentIndex = index;
                }
                
                // Eseménykezelők a gombokhoz
                prevBtn.addEventListener('click', () => {
                    showImage(currentIndex - 1);
                });
                
                nextBtn.addEventListener('click', () => {
                    showImage(currentIndex + 1);
                });
                
                // Eseménykezelők a pontokhoz
                dots.forEach(dot => {
                    dot.addEventListener('click', () => {
                        const index = parseInt(dot.getAttribute('data-index'));
                        showImage(index);
                    });
                });
                
                // Automatikus lapozás (opcionális)
                let autoSlide = setInterval(() => {
                    showImage(currentIndex + 1);
                }, 5000);
                
                // Automatikus lapozás megállítása, ha az egér a képre kerül
                slider.addEventListener('mouseenter', () => {
                    clearInterval(autoSlide);
                });
                
                // Automatikus lapozás újraindítása, ha az egér elhagyja a képet
                slider.addEventListener('mouseleave', () => {
                    autoSlide = setInterval(() => {
                        showImage(currentIndex + 1);
                    }, 5000);
                });
            });
        });