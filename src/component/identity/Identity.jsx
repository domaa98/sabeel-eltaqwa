import "./identity.css";
import identity1 from "../../assets/identity1.jpg";
import identity2 from "../../assets/pillow.png";
import identity3 from "../../assets/identity3.jpg";

function Identity() {
  return (
    <section className="identitySection" id="who">
      {/* Left Div with Images */}
      <div className="images-container">
        <img src={identity3} alt="Image 1" className="image" />
        <img src={identity2} alt="Image 2" className="image" />
        <img src={identity1} alt="Image 3" className="image" />
      </div>

      {/* Right Div with Text */}
      <div className="text-container">
        <h4 className="subtitle">من نحن</h4>
        <h2 className="main-title">نبذة تفصيلية عن المؤسسة</h2>
        <p className="paragraph">
        سبيل التقوى شركة رائدة في مجال تجارة الجملة، تقدم منتجاتنا من قطاعي الدواجن المجمدة، وكذلك الأقمشة الخاصة بالمفروشات، نلتزم بتقديم الجودة التي يستحقها عملائنا في المملكة والخليج{/* <a href="#ourVision" className="specialFont" > ...عرض المزيد</a>*/}
        </p>

        {/*<h2 className="main-title" id="ourVision">رؤيتنا</h2>
        <p className="paragraph">
          من خلال تقديم منتجات غذائية عالية الجودة، وبطرقٍ آمنةٍ نساهم في تحقيق
          الأمن الغذائي والوفاء بتطلعات عملائنا، ونلتزم بأن نكون واحدة من أفضل
          المنشآت الرائدة في مجال تجارة المواد الغذائية<a href="#ourMission" className="specialFont" > ...عرض المزيد</a>
        </p>

        <h2 className="main-title" id="ourMission">مهمتنا</h2>
        <p className="paragraph">
          قدراتنا وسرعة استجابتنا تمكننا من تقديم مستويات عالية من الجودة
          والتميز لموادنا الغذائية التي تراعي المعايير والاحتياجات الغذائية
          وتلبي المتطلبات العالية لعملائنا من مؤسسات وأفراد، سواءً داخل المملكة
          أو خارجها<a href="#ourWay" className="specialFont" > ...عرض المزيد</a>
        </p>

        <h2 className="main-title" id="ourWay">طريقتنا</h2>
        <p className="paragraph">
          نعمل على تحقيق السهولة والسلاسة والجودة في جميع أنواع المواد الغذائية
          من خلال تطبيق أعلى معايير سلامة الغذاء، لتقديم علامات تجارية جديرة
          بالثقة تلبي احتياجات العملاء
        </p> */} 
      </div>
    </section>
  );
}

export default Identity;
