


function Navbar() {
    return (
      <nav className="navbar">
        <h1>Hootsuite</h1>
        <ul>
          <li><a href="#">Platforms</a></li>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Enterprise</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Education</a></li>
        </ul>
        <div className="nav-right">
          <a href="#">Contact Us</a>
          <a href="#">Log In</a>
          <button>Sign Up</button>
        </div>
      </nav>
    );
  }
  
  function HeroicSection() {
    return (
      <section className="heroic-section">
        <h2>See Value from social sooner</h2>
        <p>Our training and strategic services have helped thousands of organisations succeed on social</p>
        <button className="btn">Request a Demo</button>
      </section>
    );
  }
  
  function Card({ icon, title, description }) {
    return (
      <div className="card">
        <i className={icon} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  function CardSection() {
    return (
      <section className="card-section">
        <h2>Our Services</h2>
        <div className="card-container">
          <Card icon="fas fa-laptop laptop-icon" title="Service 1" description="This is a sample service." />
          <Card icon="fas fa-chart-bar chart-icon" title="Service 2" description="This is a sample service." />
          <Card icon="fas fa-lock lock-icon" title="Service 3" description="This is a sample service." />
        </div>
      </section>
    );
  }
  
  function App() {
    return (
      <div>
        <Navbar />
        <HeroicSection />
        <CardSection />
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  