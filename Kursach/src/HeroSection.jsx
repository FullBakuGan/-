import './HeroSection.css'

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Запишитесь к идеальному мастеру онлайн
        </h1>
        <p className="hero-subtitle">
          Выбирайте мастера, время и услугу за пару кликов. 
          Отменяйте и переносите запись онлайн без лишних звонков.
        </p>
        
        <div className="hero-actions">
          <a href="#booking" className="btn-primary">Записаться онлайн</a>
          <a href="#salons" className="btn-secondary">Найти мастера</a>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Мастеров</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10k+</div>
            <div className="stat-label">Записей</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Довольных клиентов</div>
          </div>
        </div>
      </div>
    </section>
  )
}