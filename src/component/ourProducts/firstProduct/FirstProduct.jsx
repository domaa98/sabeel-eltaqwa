import "./firstProduct.css";
import service1 from "../../../assets/service4.svg";
import service2 from "../../../assets/service6.svg";
import img1 from "../../../assets/ch2.png"
import img2 from "../../../assets/ch1.png"

const cardData = [
  {
    id: 1,
    title: "توريد الدواجن المجمدة",
    paragraph:' ابقاء اللحوم طازجة والتأكد من سلامة التخزين',
    image: service1,
  },
  { id: 2,
     title: "حلول تخزين وتوزيع",
     paragraph:'التخزين الآمن والنقل السريع للحفاظ على المنتجات بأفضل حال',
     image: service2 
    }
];

function FirstProduct() {
  return (
    <div className="firstProduct">
      <div className="firstProductImages">
        <img src={img1} alt="image" className="firstProductImage1" />
        <img src={img2} alt="image" className="firstProductImage2" />
      </div>

      <div className="firstProductDetails">
        <h2 className="title">دواجن مجمدة بجودة لا تُضاهى</h2>
        <p className="mainText">
          نقدم تشكيلة متنوعة من الدواجن المجمدة، مختارة بعناية وفق أعلى معايير
          السلامة والجودة لتلبية احتياجات الفنادق، المطاعم، والمحال التجارية
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
  );
}

export default FirstProduct;
