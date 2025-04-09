document.getElementById('current-year').textContent = new Date().getFullYear();

const actionButton = document.getElementById('action-button');
const fabOptions = document.getElementById('fab-options');

actionButton.addEventListener('click', () => {
    fabOptions.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.fab-container')) {
        fabOptions.classList.remove('active');
    }
});

document.getElementById('print-button').addEventListener('click', () => {
    window.print();
});

const themeButton = document.getElementById('theme-button');
const themeIcon = themeButton.querySelector('i');
let currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeButton.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    if (currentTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});


const skillItems = document.querySelectorAll('.skill-item');

function animateSkillBars() {
    skillItems.forEach(item => {
        const skillLevel = item.getAttribute('data-level');
        const progressBar = item.querySelector('.skill-progress');
        
        const rect = item.getBoundingClientRect();
        const isInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        
        if (isInViewport) {
            progressBar.style.width = `${skillLevel}%`;
        }
    });
}

const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.getElementById('prev-testimonial');
const nextButton = document.getElementById('next-testimonial');
let currentSlide = 0;

function showSlide(index) {
    testimonialSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
}

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showSlide(currentSlide);
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
    showSlide(currentSlide);
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-index'));
        showSlide(slideIndex);
    });
});

let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showSlide(currentSlide);
}, 5000);

const testimonialsContainer = document.querySelector('.testimonials-container');
testimonialsContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

testimonialsContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }, 5000);
});

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                section.classList.add('animate-in');
                
                if (section.id === 'skills-section') {
                    animateSkillBars();
                }
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.resume-section').forEach(section => {
        observer.observe(section);
    });
}

document.querySelectorAll('.resume-section').forEach(section => {
    section.classList.add('animate-in');
});

document.querySelectorAll('.experience-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(5px)';
        item.style.borderLeftColor = 'var(--primary-color)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
        item.style.borderLeftColor = 'transparent';
    });
});

document.querySelectorAll('.experience-item').forEach(item => {
    item.style.transition = 'transform 0.3s ease, border-left-color 0.3s ease';
    item.style.borderLeft = '3px solid transparent';
    item.style.paddingLeft = 'var(--spacing-sm)';
});