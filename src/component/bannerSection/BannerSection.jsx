import './bannerSection.css'
import mainImage from '../../assets/hero.jpeg'
import leftImage from '../../assets/pl4.png'
import rightImage from '../../assets/ch4.jpg'
import line from '../../assets/line.svg'
function BannerSection() {
  return (
    <div className='bannerSection' id='main'>

        <div className="bannerSectionText">
            <h3>سبيل التقوى، حلول تجارة الجملة في قطاعي الأغذية وأقمشة المفروشات</h3>
        </div>

        <div className="lineVector">
         <img src={line} alt="wave line" />
        </div>
        <img src={mainImage} alt="hero image" className='mainImage' />
        <img src={leftImage} alt="hero image" className='leftImage' />
        <img src={rightImage} alt="hero image" className='rightImage' />
      
    </div>
  )
}

export default BannerSection
