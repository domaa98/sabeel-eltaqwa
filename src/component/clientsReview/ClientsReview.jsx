
import { useState } from "react";
import './clientsReview.css'
import client5 from '../../assets/photo5.png'
import client2 from '../../assets/client2.jpg'
import photo7 from '../../assets/photo7.png'
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';
import { FaStar } from "react-icons/fa6";


const clients = [
    {
      id: 1,
      image: client5,
      name: 'ندي احمد',
      description: 'تجربتي كانت ممتازة! الطلب وصل سريعًا، وكل شيء كان بجودة عالية. بالتأكيد سأطلب مرة أخرى.',
    },
    {
      id: 2,
      image: client2,
      name: 'محمد السيد',
      description: 'الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم.',
    },
    {
      id: 3,
      image: photo7,
      name: 'فاروق',
      description: 'الخدمة ممتازة، والتوصيل سريع. أحببت العناية بالتفاصيل وجودة المنتجات. شكراً لكم!',
    },
    
  ];

const ClientsReview = () => {

        const cardsPerSlide = 3;
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const nextSlide = () => {
          if (currentIndex + cardsPerSlide < clients.length) {
            setCurrentIndex(currentIndex + cardsPerSlide);
          }
        };
      
        const prevSlide = () => {
          if (currentIndex - cardsPerSlide >= 0) {
            setCurrentIndex(currentIndex - cardsPerSlide);
          }
        };
    
        const visibleCards = clients.slice(currentIndex, currentIndex + cardsPerSlide);
    

  return (
   <div className="ourClientsReview">
       <div className="top-section">
         <div className="title">شهادات العملاء</div>
         <div className="buttons">
           <button onClick={prevSlide}><FaArrowLeftLong />
           </button>
           <button onClick={nextSlide}> <FaArrowRight />
           </button>
         </div>
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
                <div className="rate">
                    <div className="clientName">{card.name}</div>
                    <div className="clientRate">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                </div>
               <p>{card.description}</p>
             </div>
           </div>
         ))}
       </div>
     </div>
  )
}

export default ClientsReview
