// Current year
document.getElementById("current-year").textContent = new Date().getFullYear()

// FAB Menu
const actionButton = document.getElementById("action-button")
const fabOptions = document.getElementById("fab-options")

actionButton.addEventListener("click", () => {
  fabOptions.classList.toggle("active")
})

document.addEventListener("click", (event) => {
  if (!event.target.closest(".fab-container")) {
    fabOptions.classList.remove("active")
  }
})

// Print functionality
document.getElementById("print-button").addEventListener("click", () => {
  window.print()
})

// Theme toggle
const themeButton = document.getElementById("theme-button")
const themeIcon = themeButton.querySelector("i")
let currentTheme = localStorage.getItem("theme") || "light"

if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark")
  themeIcon.classList.remove("fa-moon")
  themeIcon.classList.add("fa-sun")
}

themeButton.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", currentTheme)
  localStorage.setItem("theme", currentTheme)

  if (currentTheme === "dark") {
    themeIcon.classList.remove("fa-moon")
    themeIcon.classList.add("fa-sun")
  } else {
    themeIcon.classList.remove("fa-sun")
    themeIcon.classList.add("fa-moon")
  }
})

// Testimonials slider
const testimonialSlides = document.querySelectorAll(".testimonial-slide")
const dots = document.querySelectorAll(".dot")
const prevButton = document.getElementById("prev-testimonial")
const nextButton = document.getElementById("next-testimonial")
let currentSlide = 0

function showSlide(index) {
  testimonialSlides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  testimonialSlides[index].classList.add("active")
  dots[index].classList.add("active")
  currentSlide = index
}

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % testimonialSlides.length
  showSlide(currentSlide)
})

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
  showSlide(currentSlide)
})

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = Number.parseInt(dot.getAttribute("data-index"))
    showSlide(slideIndex)
  })
})

// Auto-slide
let slideInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonialSlides.length
  showSlide(currentSlide)
}, 5000)

const testimonialsContainer = document.querySelector(".testimonials-container")

testimonialsContainer.addEventListener("mouseenter", () => {
  clearInterval(slideInterval)
})

testimonialsContainer.addEventListener("mouseleave", () => {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length
    showSlide(currentSlide)
  }, 5000)
})
