import './footer.css'
import logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <footer className="footer">
    <img src={logo} alt="Company Logo" className="footer-logo" />
    <p className="footerParagraph">سبيل التقوى، تجارة جملة موثوقة في قطاعي الدواجن المجمدة وأقمشة</p>
    <nav className="footer-nav">
      <ul>
        <li><a href="#main">الرئيسية</a></li>
        <li><a href="#who">من نحن</a></li>
        <li><a href="#products">منتجاتنا</a></li>
        <li><a href="#blog">المدونة</a></li>
      </ul>
    </nav>
  </footer>
  )
}

export default Footer
