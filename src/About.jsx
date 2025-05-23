import "./App.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-img-frame">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          alt="Beach"
          className="about-img"
        />
      </div>
      <div className="about-content">
        <h2 className="about-title">
          ABOUT <span className="about-title-highlight">US</span>
        </h2>
        <h3 className="about-heading">Explore The Difference</h3>
        <p className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?
        </p>
        <p className="about-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?
        </p>
        <button className="about-btn">READ MORE</button>
      </div>
    </section>
  );
};

export default About;