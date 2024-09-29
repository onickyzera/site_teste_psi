document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
  
  const form = document.querySelector('#booking-form')
  const bookingButton = document.querySelector('.btn-primary') // Mover para antes do submit
  
  form.addEventListener('submit', function(event) {
    const name = form.querySelector('input[name="name"]').value
    const email = form.querySelector('input[name="email"]').value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
    if (!name || !email || !emailRegex.test(email)) {
      event.preventDefault()
      alert('Por favor, preencha todos os campos com um email válido.')
    } else {
      bookingButton.disabled = true
      alert('Consulta agendada com sucesso!')
    }
  })
 
  bookingButton.addEventListener('click', function() {
    this.textContent = 'Aguarde...'
    this.disabled = true

    setTimeout(() => {
      this.textContent = 'Agende Sua Consulta'
      this.disabled = false
    }, 2000)
  })

  const testimonials = document.querySelectorAll('.testimonials-card p')
  let currentTestimonial = 0
  
  function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active')
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    testimonials[currentTestimonial].classList.add('active')
  }
  
  testimonials[0].classList.add('active')
  
  setInterval(showNextTestimonial, 7000) 
  
  const menuToggle = document.querySelector('.menu-toggle')
  const navLinks = document.querySelector('.nav-links')
  
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false
    menuToggle.setAttribute('aria-expanded', !isExpanded)
    navLinks.classList.toggle('active') 
    document.body.classList.toggle('menu-open') 
  })
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active') 
      menuToggle.setAttribute('aria-expanded', false) 
      document.body.classList.remove('menu-open') 
    })
  })
  