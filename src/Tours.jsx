import "./App.css";

const tours = [
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "China",
    duration: "6 Days",
    price: "From $2100"
  },
  {
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    date: "October 1st, 2020",
    title: "Best Of Java",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Indonesia",
    duration: "11 Days",
    price: "From $1400"
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    date: "August 26th, 2020",
    title: "Explore Hong Kong",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Hong Kong",
    duration: "8 Days",
    price: "From $4000"
  },
  {
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    date: "September 15th, 2020",
    title: "Kenya Highlights",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "Kenya",
    duration: "20 Days",
    price: "From $3300"
  }
];

const Tours = () => (
  <section className="tours-section">
    <h2 className="tours-title">
      FEATURED <span className="tours-title-highlight">TOURS</span>
    </h2>
    <div className="tours-list">
      {tours.map((tour, idx) => (
        <div className="tour-card" key={idx}>
          <div className="tour-img-box">
            <img src={tour.image} alt={tour.title} className="tour-img" />
            <span className="tour-date">{tour.date}</span>
          </div>
          <div className="tour-card-content">
            <h4 className="tour-heading">{tour.title}</h4>
            <p className="tour-text">{tour.description}</p>
            <div className="tour-info">
              <span><i className="fa fa-map"></i> {tour.country}</span>
              <span>{tour.duration}</span>
              <span>{tour.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Tours;