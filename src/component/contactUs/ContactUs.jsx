import { useRef } from 'react';
import './contact.css'
import map from '../../assets/map.png'


const ContactUs = () => {

    const form = useRef();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        e.target.reset();
      };


  return (
    <>
    <h2 className='contactTitle'>تواصل معنا</h2>
    <div className="containerr" id='Contact_us'>
      <div className="section image-section">
        <img
          src={map}
          alt="Placeholder"
          className="section-image"
        />
      </div>
      <div className="section form-section">
        <p className='first-title'>لسهولة الاتصال الفوري مع المؤسسة</p>
        <p className='second-title'>تواصل معنا لمعرفة كيف يمكننا أن نكون جزءًا من نجاحك</p>
        <form ref={form} onSubmit={handleSubmit} className='contactForm'>
          <div>
            <label htmlFor="name">الاسم بالكامل</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ادخل اسمك"
            
              required
            />
          </div>
          <div>
            <label htmlFor="phone">رقم الهاتف</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="ادخل رقم الهاتف"
             
              required
            />
          </div>
          <div>
            <label htmlFor="message">طلبك</label>
            <textarea
              id="message"
              name="message"
              placeholder="اكتب طلبك"
              
              required
            />
          </div>
          <button type="submit">تواصل معنا</button>
        </form>
      </div>
    </div>
    </>
    
  )
}

export default ContactUs
