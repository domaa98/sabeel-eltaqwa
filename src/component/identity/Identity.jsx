import "./identity.css";
import identity1 from "../../assets/identity1.jpg";
import identity2 from "../../assets/identity2.jpg";
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
          نحن مؤسسة لتجارة المواد الغذائية، بدـأنا مشوارنا عام (2024) من عاصمة
          المملكة العربية السعودية الرياض واضعين نُصب أعيننا هدفاً واضحاً لنكون
          واحدة من الرواد في مجال تجارة المواد الغذائية، تماشياً مع رؤية المملكة
          2030 ومستهدفاتها الطموحة، بفضل التزامنا بالجودة واتباع أعلى معايير
          سلامة الغذاء<span className="specialFont"> ...عرض المزيد</span>
        </p>
      </div>
    </section>
  );
}

export default Identity;
