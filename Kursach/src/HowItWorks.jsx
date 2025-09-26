import './HowItWorks.css'
import { steps } from '../../data'

export default function HowItWorks() {
  

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2 className="section-title">Как это работает</h2>
        <p className="section-subtitle">
          Простой и удобный процесс записи, который экономит ваше время
        </p>
        
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}