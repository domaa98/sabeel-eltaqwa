import './ourServices.css'

import service1 from '../../assets/service1.svg'
import service2 from '../../assets/service2.svg'
import service3 from '../../assets/service3.svg'
import service4 from '../../assets/service4.svg'
import service5 from '../../assets/service5.svg'
import service6 from '../../assets/service6.svg'

const cardData = [
    { id: 1, title: 'توريد المنتجات الغذائية المحلية والعالمية', image: service1 },
    { id: 2, title: 'استيراد المنتجات الغذائية المتخصصة', image: service2 },
    { id: 3, title: 'توفير حلول شاملة للمتاجر والمطاعم والفنادق والمؤسسات', image: service3 },
    { id: 4, title: 'تصدير المواد الغذائية المحلية إلى الأسواق الدولية', image: service4 },
    { id: 5, title: 'توزيع المواد الغذائية، مع ضمان التسليم في الوقت المحدد', image: service5 },
    { id: 6, title: 'توفير مرافق تخزين آمنة لحفظ المواد الغذائية، بما في ذلك التخزين في درجات حرارة معينة، وضمان استمرار سلسلة التوريد', image: service6 },
  ];


const OurServices = () => {
  return (
     <section className="ourServicesSection" id='services'>
      {/* Top Div with Title */}
      <div className="top-div">
        <h2 className="section-title">خدماتنا</h2>
      </div>

      {/* Bottom Div with Cards */}
      <div className="cards-container">
        {cardData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurServices
