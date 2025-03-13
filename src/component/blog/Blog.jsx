import './blog.css'
import img1 from "../../assets/ch2.png"
import img2 from "../../assets/ch3.png"
import img3 from "../../assets/pl2.png"
import img4 from "../../assets/pl1.png"

const firstBlog = [
  {
    id: 1,
    title: "أهمية التخزين الآمن للدواجن المجمدة",
    paragraph:'الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم. الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم',
    image: img1,
  },
  { id: 2,
     title: "كيفية اختيار الدواجن المجمدة بأفضل جودة",
     paragraph:'الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم. الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم',
     image: img2 ,
    }
];

const secondBlog = [
    {
      id: 1,
      title: "نصائح للعناية بأقمشة المفروشات",
      paragraph:'الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم. الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم',
      image: img3,
    },
    {
       id: 2,
       title: "أفضل الأقمشة لديكورات المنزل العصري",
       paragraph:'الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم. الفريق متعاون جداً، والمنتجات دائماً طازجة ومطابقة للوصف. أشعر بالثقة في التعامل معكم',
       image: img4, 
      }
  ];

function Blog() {
  return (
    <div className='blog' id='blog'>

        <h2 className="blogTitle">تعرف على المزيد من عالم تجارة اللحوم المجمدة وأقمشة المفروشات</h2>

        <h4 className="blogCardTitle">قسم اللحوم والدواجن المجمدة</h4>

        <div className="blogCards">
            
          {firstBlog.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.image} alt={card.title} className="card-image" />
              <h2 className="card-title">{card.title}</h2>
              {/*<p className="cardText">{card.paragraph}</p> */}
            </div>
          ))}
        </div>

        <h4 className="blogCardTitle">قسم الأقمشة للمفروشات</h4>
        <div className="blogCards">

          {secondBlog.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.image} alt={card.title} className="card-image" />
              <h2 className="card-title">{card.title}</h2>
              {/*<p className="cardText">{card.paragraph}</p> */}
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Blog
