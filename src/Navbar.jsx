import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-logo-bold">Back</span>
        <span className="navbar-logo-highlight">Roads</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Tours</a></li>
        <li><a href="#">Login</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
        <a href="#" aria-label="Web"><i className="fa fa-globe"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;