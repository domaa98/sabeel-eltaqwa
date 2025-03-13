import './secondProduct.css';
import service1 from "../../../assets/service4.svg";
import service2 from "../../../assets/service6.svg";
import img1 from "../../../assets/pl1.png"


const cardData = [
  {
    id: 1,
    title: "توريد أقمشة المفروشات",
    paragraph:'تشكيلة واسعة من الأقمشة لتصاميم تناسب كل الديكورات، وتلائم جميع الأذواق وتتميز بجودة مثالية للديكور الداخلي',
    image: service1,
  },
  { id: 2,
     title: "توريد أقمشة المفروشات",
     paragraph:'عرض حلول شاملة لحفظ الأقمشة وضمان تسليمها بحالة ممتازة',
     image: service2 
    }
];


function SecondProduct() {
  return (
    <div className='SecondProduct'>
      <div className="SecondProductImages">
              <img src={img1} alt="image" className="SecondProductImage1" />
            </div>
      
            <div className="SecondProductDetails">
              <h2 className="title">أقمشة مفروشات متميزة بتصاميم عصرية وجودة عالية</h2>
              <p className="mainText">
              نوفر تشكيلة من الأقمشة المخصصة للكنب والستائر، تتميز بتنوع الألوان والتصاميم مع متانة تدوم طويلًا، مثالية للمنازل والمشاريع التجارية
                </p>
              <div className="cards">
                {cardData.map((card) => (
                  <div className="card" key={card.id}>
                    <img src={card.image} alt={card.title} className="card-image" />
                    <h2 className="card-title">{card.title}</h2>
                    <p className="cardText">{card.paragraph}</p>
                  </div>
                ))}
              </div>
              <button className="button">اطلب الًان</button>
            </div>
    </div>
  )
}

export default SecondProduct
