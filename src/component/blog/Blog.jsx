import './blog.css'

import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import { useState } from 'react';
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';

const cards = [
    {
      id: 1,
      image: blog3,
      title: 'الاتجاهات في السوق الغذائية والوصفات الغذائية',
      description: 'الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم. الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف',
    },
    {
      id: 2,
      image: blog2,
      title: 'أهمية الأمن الغذائي في المملكة',
      description: 'الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم. الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم',
    },
    {
      id: 3,
      image: blog1,
      title: 'أفضل الطرق لاختيار الأطعمة الطازجة',
      description: 'الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم. الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم',
     },
    
  ];


const Blog = () => {

     const cardsPerSlide = 3;
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const nextSlide = () => {
          if (currentIndex + cardsPerSlide < cards.length) {
            setCurrentIndex(currentIndex + cardsPerSlide);
          }
        };
      
        const prevSlide = () => {
          if (currentIndex - cardsPerSlide >= 0) {
            setCurrentIndex(currentIndex - cardsPerSlide);
          }
        };
    
        const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerSlide);
    

  return (
     <div className="blogSection" id='blog'>
        <div className="top-section">
          <div className="title">المدونة</div>
          {cards.length > cardsPerSlide && (
          <div className="buttons">
            <button onClick={prevSlide} disabled={currentIndex === 0}>
              <FaArrowLeftLong />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex + cardsPerSlide >= cards.length}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
        </div>
        <div className="slider">
          {visibleCards.map((card) => (
            <div key={card.id} className="card">
              <img
              className="card-image"
                src={card.image}
                alt={card.title}
              />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Blog
