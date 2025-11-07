import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaTasks, FaHandshake } from "react-icons/fa";
import logo from './Images/MOC_Logo.jpeg';
import USerImag from './Images/User_img.jpeg';
import dpiitCertificate from './Images/DPIIT_Certificate.png';

function Portfolio() {
  return (
    <div className="bg-ligh">
      {/* Navbar */}
     <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm py-1" style={{boxShadow: "0 10px 12px -4px rgba(100, 111, 112, 0.25)"}}>
       <div className="container-fluid" style={{ paddingLeft: 20 }}>
        <a className="navbar-brand fw-bold" href="#home" style={{ color: "#1f6ea7" }}>
          <img src={logo} alt="Moc Connect Logo" style={{ height: 40 }} />{" "}
          MOC Connect Pvt. Ltd.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto me-3" >
            <li className="nav-item"><a className="nav-link" href="#ih"> </a></li>
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#product">Product</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Works</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
            <li className="nav-item"><a className="nav-link" href="#recognitions">Recognitions</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="ih" style={{ height: 52 }} />
      {/* Hero Section */}
      <motion.section
        id="home"
        className="text-center py-5 text-white"
        style={{
          minHeight: "calc(100vh - var(--nav-h))",
          backgroundColor: "#1f6ea7",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        

        <h1 className="display-6 fw-bold text-uppercase">
          MOC CONNECT PRIVATE LIMITED
        </h1>

        <p className="lead fw-semibold text-light mb-5">
          Mode of Communication — Simplifying how people and vendors connect.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            className="btn btn-light fw-semibold rounded-pill px-4 py-2"
            style={{
              color: "#1f6ea7",
              border: "2px solid white",
            }}
          >
            About Us
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="btn btn-outline-light fw-semibold rounded-pill px-4 py-2"
            style={{
              borderWidth: "2px",
            }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.section>



      {/* About Us */}
      <section id="about" className="container py-5 text-center">
        <div className="row justify-content-center">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{
              color: "#1f6ea7",
              textAlign: "center",
              textDecoration: "none",
              borderBottom: "none",
              boxShadow: "none",
              display: "block"
            }}
          >
            About Us
          </h2>
        </div>

        <div className="row align-items-center">
          {/* Text on the left */}
          <div className="col-md-6">
            <p>
              MOC CONNECT PRIVATE LIMITED is building an innovative communication
              platform combining chat-based messaging, one-to-one task sharing, and
              grocery order communication for local vendors. Customers send lists
              directly to shops, and vendors receive them instantly — no delivery or
              online payment is required, keeping it simple and personal. Vendors can
              also manage deliveries through their own partners. Customers get a
              quick and transparent ordering experience, while vendors maintain
              relationships and manage operations from one clean interface.
            </p>
          </div>

          {/* Image on the right */}
          <div className="col-md-6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/669/997/non_2x/illustration-people-communicate-with-each-other-the-concept-of-a-social-network-messenger-and-communication-with-each-other-vector.jpg"
              alt="About"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section id="product" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{
              color: "#1f6ea7",
              textAlign: "center",
              textDecoration: "none",
              borderBottom: "none",
              boxShadow: "none",
              display: "block"
            }}
          >
            What We&apos;re Building
          </h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: 800 }}>
            MoC Connect is a real-time communication and task-sharing app designed for local supermarkets and kirana stores.
            Vendors can list grocery items, share prices, and receive customer orders directly through chat. Customers can send
            lists, view prices, and coordinate pickups seamlessly — all in one app.
          </p>
        </div>
      </section>



      {/* Our Works */}
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2
        className="text-3xl font-semibold mb-4"
        style={{
          color: "#1f6ea7",
          textAlign: "center",
          textDecoration: "none",
          borderBottom: "none",
          boxShadow: "none",
          display: "block"
        }}
      >
        Our Works
      </h2>

          <div className="row g-4">
            {[
              {
                title: "Smart Grocery App",
                desc: "A chat-based grocery ordering system that auto-calculates totals, tracks items, and sends summaries directly to vendors.",
                icon: <FaShoppingCart size={40} color="#1f6ea7" />
              },
              {
                title: "Chat-Based To-Do",
                desc: "A conversational task manager that helps users add, edit, and complete daily tasks using natural chat flow.",
                icon: <FaTasks size={40} color="#1f6ea7" />
              },
              {
                title: "Vendor Connect",
                desc: "A vendor onboarding and management portal that connects local businesses with customers in real time.",
                icon: <FaHandshake size={40} color="#1f6ea7" />
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="col-md-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="card shadow-sm border-0 h-100 text-center p-4">
                  <div className="mb-3">{project.icon}</div>
                  <h5 className="card-title" style={{ color: '#1f6ea7' }}>{project.title}</h5>
                  <p className="card-text text-muted">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Team */}
      <section id="team" className="container py-5">
        <h2
          className="text-3xl font-semibold mb-4"
          style={{
            color: "#1f6ea7",
            textAlign: "center",
            textDecoration: "none",
            borderBottom: "none",
            boxShadow: "none",
            display: "block"
          }}
        >
          Our Team
        </h2>
        <div className="row g-4 text-center">
          {[ 
            { Name:"Harika Gurazala",Desc:"Founder/Managing Director"},{Name:"Srinivas Gurazala",Desc:"Founder/Director"},{Name:"Pavan Kasiboina", Desc:"DevOps Engineer"}].map((role, index) => (
            <div key={index} className="col-md-4">
              <motion.div
                className="card border-0 shadow-sm p-3"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={USerImag} style={{ height: '60px' }}
                  className="rounded-circle mx-auto d-block mb-3"
                  alt={'UserImage'}
                />
                <h5 className="fw-bold textcolour"> {role.Name}</h5>
                <p>{role.Desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognitions */}
      <section id="recognitions" className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-10 text-center">
              <h2
                className="text-3xl font-semibold mb-3"
                style={{
                  color: "#1f6ea7",
                  textAlign: "center",
                  textDecoration: "none",
                  borderBottom: "none",
                  boxShadow: "none",
                  display: "block"
                }}
              >
                Recognitions &amp; Partnerships
              </h2>
              <p className="mb-2 fw-semibold" style={{ color: "#1f6ea7" }}>
                Recognized by DPIIT, Government of India
              </p>
              <p className="mb-4 text-muted">
                Registered under Startup India (DPIIT No: DIPP226285)
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img
                src={dpiitCertificate}
                alt="DPIIT Certificate of Recognition"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-5" style={{ backgroundColor: "#1f6ea7" }}>
        <div className="container text-white">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              borderBottom: "none",
              boxShadow: "none",
              display: "block"
            }}
          >
            Contact Us
          </h2>
          <div className="text-center mb-1">
            Have questions or want to collaborate? We’d love to hear from you.
          </div>
          <div className="text-center mb-1">
            info@mocconnect.in
          </div>
        </div>
      </section>

      <footer className="py-3 bg-dark text-white text-center">
        <div className="container">
          <small>
            © 2025 MOC CONNECT PRIVATE LIMITED | CIN: U62090AP2025PTC120137
          </small>
          <div>
            <small>Registered Office: 1-1-1/12/A/B, 3rd line, Mittabazar, Barampet, Narasaraopet, Andhra Pradesh, India -522601.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
