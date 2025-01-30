import './bannerSection.css'
import mainImage from '../../assets/hero.jpeg'
import leftImage from '../../assets/banner2.jpg'
import rightImage from '../../assets/banner3.jpg'
import line from '../../assets/line.svg'
function BannerSection() {
  return (
    <div className='bannerSection' id='main'>

        <div className="bannerSectionText">
            <h3>مرحباً بكم في مؤسسة سبيل التقوى، عالم الغذاء الآمن والمتميز حيث الجودة تلتقي بالثقة</h3>
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
