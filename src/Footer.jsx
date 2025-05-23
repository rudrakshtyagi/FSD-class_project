import "./App.css";

const Footer = () => (
  <footer className="footer-section">
    <ul className="footer-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Tours</a></li>
      <li><a href="#">Login</a></li>
    </ul>
    <div className="footer-icons">
      <a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
      <a href="#" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
      <a href="#" aria-label="Web"><i className="fa fa-stripe-s"></i></a>
    </div>
    <div className="footer-copy">
      Copyright &copy; Backroads Travel Tours Company  All Rights Reserved
    </div>
    <div className="footer-dev">
      Developed And Maintained By Dhaneshwar Kumar
    </div>
  </footer>
);

export default Footer;