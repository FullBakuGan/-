import { useState } from 'react'
import './FAQ.css'
import { faqItems } from '../../data'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        <p className="section-subtitle">
          Ответы на самые популярные вопросы о нашем сервисе
        </p>
        
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}