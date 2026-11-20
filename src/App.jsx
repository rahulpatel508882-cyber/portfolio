import { useState } from "react";

const categories = [
  { icon: "ri-shopping-basket-2-line", title: "Daily essentials", text: "Everything your home needs, in one easy stop.", color: "coral" },
  { icon: "ri-cake-3-line", title: "Party supplies", text: "Make every milestone feel a little more magical.", color: "yellow" },
  { icon: "ri-flower-line", title: "Fresh flowers", text: "Thoughtful blooms for every feeling and occasion.", color: "mint" },
  { icon: "ri-magic-line", title: "Event decoration", text: "Beautifully styled celebrations, made effortless.", color: "lavender" },
];

const services = [
  { number: "01", title: "Tell us your vision", text: "Share your date, occasion and the kind of feeling you want to create." },
  { number: "02", title: "We make it beautiful", text: "Our team handles the styling, shopping and set-up from start to finish." },
  { number: "03", title: "You enjoy the moment", text: "Walk into a celebration that feels like you. We’ll take care of the rest." },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <div className="announcement">
        <span>Fresh flowers, everyday essentials & celebrations made special</span>
        <a href="tel:+919876543210">Call us: +91 98765 43210 <i className="ri-arrow-right-line" /></a>
      </div>

      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Seetaram home">
            <span className="brand-mark"><i className="ri-store-2-line" /></span>
            <span><strong>seetaram</strong><small>GENERAL STORE</small></span>
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <button onClick={() => scrollTo("shop")}>The store</button>
            <button onClick={() => scrollTo("decor")}>Decor & events</button>
            <button onClick={() => scrollTo("story")}>Our story</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>
          <div className="nav-actions">
            <button className="icon-button" aria-label="Search"><i className="ri-search-line" /></button>
            <button className="basket-button" onClick={() => scrollTo("contact")}><i className="ri-shopping-bag-3-line" /><span>Visit us</span></button>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><i className={menuOpen ? "ri-close-line" : "ri-menu-line"} /></button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Your friendly neighbourhood store</p>
            <h1>Little things.<br /><em>Big moments.</em></h1>
            <p className="hero-description">From the essentials you reach for every day to the celebrations you’ll remember forever — Seetaram is here for all of life’s lovely details.</p>
            <div className="hero-buttons">
              <button className="button button-dark" onClick={() => scrollTo("shop")}>Explore the store <i className="ri-arrow-right-up-line" /></button>
              <button className="text-button" onClick={() => scrollTo("decor")}>Plan an event <i className="ri-arrow-right-line" /></button>
            </div>
            <div className="hero-note"><div className="avatars"><span>R</span><span>M</span><span>A</span></div><span>Loved by <strong>500+ families</strong> in our community</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image"><img src="https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?auto=format&fit=crop&w=1100&q=85" alt="Colourful party decorations and flowers" /></div>
            <div className="floating-card"><span className="sparkle">✦</span><div><strong>Made with care</strong><small>Since 1998 · Your local favourite</small></div></div>
            <div className="sun-shape" />
          </div>
        </section>

        <section id="shop" className="category-section container">
          <div className="section-heading"><div><p className="eyebrow"><span /> What we do</p><h2>More than a store.<br /><em>A part of your story.</em></h2></div><p className="heading-intro">Thoughtfully chosen goods and heartfelt services, brought together under one roof.</p></div>
          <div className="category-grid">
            {categories.map((item) => <article className={`category-card ${item.color}`} key={item.title}><div className="category-icon"><i className={item.icon} /></div><h3>{item.title}</h3><p>{item.text}</p><button onClick={() => scrollTo(item.title === "Event decoration" ? "decor" : "contact")}>Discover <i className="ri-arrow-right-up-line" /></button></article>)}
          </div>
        </section>

        <section id="decor" className="decor-section">
          <div className="decor-image"><img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85" alt="Warmly decorated event table" /><div className="image-label">Your day,<br /><em>your way.</em></div></div>
          <div className="decor-copy"><p className="eyebrow"><span /> Seetaram celebrations</p><h2>Let’s make<br /><em>something lovely.</em></h2><p>Birthdays, baby showers, anniversaries or just because — our little team turns your ideas into a setting worth remembering.</p><div className="service-list">{services.map((service) => <div className="service-item" key={service.number}><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div></div>)}</div><button className="button button-light" onClick={() => scrollTo("contact")}>Start planning <i className="ri-arrow-right-up-line" /></button></div>
        </section>

        <section id="story" className="story-section container">
          <div className="story-copy"><p className="eyebrow"><span /> Our little story</p><h2>Local heart.<br /><em>Lots of heart.</em></h2><p>What started as a small family shop has grown into a place our neighbourhood can count on. We know your usuals, remember your occasions and genuinely love being part of the moments in between.</p><button className="text-button" onClick={() => scrollTo("contact")}>Come say hello <i className="ri-arrow-right-line" /></button></div>
          <div className="story-stats"><div><strong>25</strong><span>years in<br />the neighbourhood</span></div><div><strong>500+</strong><span>happy families<br />served</span></div><div><strong>∞</strong><span>reasons to<br />celebrate</span></div></div>
        </section>

        <section id="contact" className="contact-section container">
          <div><p className="eyebrow"><span /> Let’s talk</p><h2>Have a moment<br /><em>in mind?</em></h2><p className="contact-lede">Tell us what you’re planning and we’ll get back to you with a little magic — and a lot of practical help.</p><div className="contact-details"><p><i className="ri-map-pin-2-line" /> 12, Market Road, Your Town</p><p><i className="ri-time-line" /> Open daily · 7:00 AM – 9:00 PM</p></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><label>Your name<input required placeholder="How should we call you?" /></label><label>What are you planning? <select defaultValue=""><option value="" disabled>Choose an occasion</option><option>Birthday celebration</option><option>Wedding or engagement</option><option>Baby shower</option><option>Something else</option></select></label><label>Your message<textarea required placeholder="Tell us a little about your idea..." rows="3" /></label><button className="button button-dark" type="submit">{submitted ? "Message sent ✓" : "Send your note"} <i className="ri-arrow-right-up-line" /></button></form>
        </section>
      </main>

      <footer><div className="container footer-inner"><div className="brand"><span className="brand-mark"><i className="ri-store-2-line" /></span><span><strong>seetaram</strong><small>GENERAL STORE</small></span></div><p>For everyday needs & extraordinary days.</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><i className="ri-instagram-line" /></a><a href="https://wa.me/919876543210" aria-label="WhatsApp"><i className="ri-whatsapp-line" /></a></div></div><div className="container footer-bottom"><span>© 2024 Seetaram General Store</span><span>Made for the moments that matter.</span></div></footer>
    </div>
  );
}

export default App;
