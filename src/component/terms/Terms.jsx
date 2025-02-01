import './terms.css'

const Terms = () => {
  return (
    <footer className="terms">
    <div className="left-links">
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
      <a href="#">Cookies</a>
    </div>
    <div className="right-text">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
      </div>
  </footer>
  )
}

export default Terms
