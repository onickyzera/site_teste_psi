// Scroll suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
  
  // Validação do formulário de agendamento
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
  
  // Feedback visual ao clicar no botão de agendamento
  bookingButton.addEventListener('click', function() {
    this.textContent = 'Aguarde...'
    this.disabled = true
  
    // Simulação de uma ação de 2 segundos
    setTimeout(() => {
      this.textContent = 'Agende Sua Consulta'
      this.disabled = false
    }, 2000)
  })
  
  // Carrossel de testemunhos
  const testimonials = document.querySelectorAll('.testimonials-card p')
  let currentTestimonial = 0
  
  function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active')
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    testimonials[currentTestimonial].classList.add('active')
  }
  
  // Inicializa o carrossel com o primeiro ativo
  testimonials[0].classList.add('active')
  
  setInterval(showNextTestimonial, 7000) // Troca o testemunho a cada 7 segundos
  
  // Menu responsivo (hambúrguer)
  const menuToggle = document.querySelector('.menu-toggle')
  const navLinks = document.querySelector('.nav-links')
  
  // Função para abrir/fechar o menu
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false
    menuToggle.setAttribute('aria-expanded', !isExpanded)
    navLinks.classList.toggle('active') // Alterna a visibilidade do menu
    document.body.classList.toggle('menu-open') // Bloqueia ou libera o scroll do body
  })
  
  // Fecha o menu ao clicar em qualquer link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active') // Fecha o menu
      menuToggle.setAttribute('aria-expanded', false) // Atualiza o estado do botão de hambúrguer
      document.body.classList.remove('menu-open') // Libera o scroll
    })
  })
  