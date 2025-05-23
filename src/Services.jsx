import "./App.css";

const services = [
  {
    icon: <i className="fa fa-wallet"></i>,
    title: "Saving Money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    icon: <i className="fa fa-tree"></i>,
    title: "Endless Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    icon: <i className="fa fa-socks"></i>,
    title: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  }
];

const Services = () => (
  <section className="services-section">
    <h2 className="services-title">
      OUR <span className="services-title-highlight">SERVICES</span>
    </h2>
    <div className="services-list">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <div className="service-icon">{service.icon}</div>
          <div>
            <h4 className="service-heading">{service.title}</h4>
            <p className="service-text">{service.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;