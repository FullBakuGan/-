import './Header.css'

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>HairTime</a>
        
        <nav className="nav">
          <a href="#how-it-works" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works')}}>Как это работает</a>
          <a href="#advantages" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('advantages') }}>Преимущества</a>
          <a href="#salons" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('salons') }}>Салоны</a>
          <a href="#reviews" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('reviews') }}>Отзывы</a>
          <a href="#faq" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>FAQ</a>
        </nav>

        <div className="header-actions">
          <a href="#for-business" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('for-business') }}>Для салонов</a>
          <a href="#booking" className="btn-primary" onClick={(e) => { 
            e.preventDefault()
            scrollToSection('hero') 
            console.log("Вы нажали на кнопку Записаться")
            }}>Записаться</a>
        </div>
      </div>
    </header>
  )
}