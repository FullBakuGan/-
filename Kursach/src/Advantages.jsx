import './Advantages.css'
import { advantages } from '../../data'

export default function Advantages() {
  

  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <h2 className="section-title">Почему выбирают нас</h2>
        <p className="section-subtitle">
          Все преимущества онлайн-записи, которые делают вашу жизнь проще
        </p>
        
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">{advantage.icon}</div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}