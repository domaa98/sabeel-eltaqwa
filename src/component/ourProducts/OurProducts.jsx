import { useState } from "react";
import './ourProducts.css';
/*import apple from '../../assets/apple.png'*/
import orange from '../../assets/orange.png'
import pomegranate from '../../assets/pomegranate.png'
import strawberry from '../../assets/strawberry.png'
import tomato from '../../assets/tomato.png'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const cards = [
    {
      id: 1,
      image: tomato,
      title: 'طماطم طازجة',
      description: 'طماطم طازجة وناضجة، بلونها الأحمر الزاهي وقوامها العصاري، تتميز بنكهة طبيعية غنية مثالية للسلطات، الصلصات، ...',
    },
    {
      id: 2,
      image: orange,
      title: 'برتقال طازج وعصاري',
      description: 'برتقال طازج وعصاري، يتميز بلونه البرتقالي المشرق ونكهته الحمضية الحلوة، غني بفيتامين سي ومثالي للعصائر أو كوجبة ...',
    },
    {
      id: 3,
      image: pomegranate,
      title: 'رمان حجم وسط',
      description: 'رمان طازج بحباته اللامعة والعصارية، يتميز بلونه الأحمر القاني ونكهته المتوازنة بين الحلاوة والحموضة، غني بالفوائد الصحية ...',
    },
    {
      id: 4,
      image: strawberry,
      title: 'فروالة حجم وسط',
      description: 'فراولة طازجة وحلوة، تتميز بلونها الأحمر الزاهي وحباتها المليئة بالعصارة، مثالية للوجبات الخفيفة، العصائر، والحلويات',
    },
    {
      id: 5,
      image: tomato,
      title: 'طماطم طازجة',
      description: 'طماطم طازجة وناضجة، بلونها الأحمر الزاهي وقوامها العصاري، تتميز بنكهة طبيعية غنية مثالية للسلطات، الصلصات، ...',
    },
    {
      id: 6,
      image: strawberry,
      title: 'فروالة حجم وسط',
      description: 'فراولة طازجة وحلوة، تتميز بلونها الأحمر الزاهي وحباتها المليئة بالعصارة، مثالية للوجبات الخفيفة، العصائر، والحلويات',
    },
  ];
  
const OurProducts = () => {

    const cardsPerSlide = 4;
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
    <div className="ourProductsSection" id="products">
    <div className="top-section">
      <div className="title">منتجاتنا</div>
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
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button>اطلب الان</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default OurProducts
