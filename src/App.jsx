import React, { useState } from "react";

const phone = "+592 642 1248";
const whatsapp = "https://wa.me/5926421248";
const logoData = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80";

const stats = [
  ["50", "Acres of sponsor-controlled riverfront land"],
  ["10", "Acre initial Phase 1A retreat core"],
  ["6", "Premium launch keys"],
  ["G$134M", "Illustrative stabilized annual revenue"],
];

const highlights = [
  ["6-Key Phase 1A Launch", "2 signature villas, 3 forest cabins, 1 family cabin, Dawn Deck, mini pavilion, hidden service zone, and curated forest trails."],
  ["Premium Nature Product", "A privacy-first eco-retreat shaped around creek arrival, forest immersion, elevated structures, and low-density exclusivity."],
  ["Multiple Revenue Streams", "Premium stays, farm-to-table dining, creek excursions, wellness retreats, events, branded goods, and future expansion upside."],
  ["Policy-Aligned Opportunity", "Positioned at the intersection of eco-tourism, agri-tourism, rural development, and authentic Guyanese destination creation."],
];

const economics = [
  ["Working Phase 1A Budget", "G$400M–450M"],
  ["Indicative Equity / Strategic Capital", "G$250M–300M"],
  ["Delivery Horizon", "10–12 months"],
  ["Launch Inventory", "2 villas • 3 forest cabins • 1 family cabin"],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="header">
        <a className="brand" href="#home">
          <span className="brandMark">K</span>
          <span><strong>KOREAI</strong><small>Farms & Retreat</small></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#opportunity">Opportunity</a>
          <a href="#highlights">Highlights</a>
          <a href="#economics">Economics</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navButton" href="#contact">Request Package</a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
      </header>

      <section id="home" className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <div>
            <p className="pill"><span className="miniMark">K</span> Premium Eco-Retreat Investment Opportunity • Guyana</p>
            <h1>Invest in a riverfront retreat where nature, privacy, and growth converge.</h1>
            <p className="lead">Koreai Farms & Retreat is an experience-led eco-retreat and agri-tourism destination near Bartica, built around a sponsor-controlled 50-acre property, an initial 10-acre Phase 1A core, and a 6-key premium launch concept.</p>
            <div className="actions">
              <a className="button gold" href="#contact">Request Investor Package</a>
              <a className="button outline" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Us</a>
            </div>
          </div>

          <aside className="snapshot">
            <p className="eyebrow">Phase 1A Snapshot</p>
            <div className="statGrid">
              {stats.map(([value, label]) => (
                <div className="stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="opportunity" className="section split">
        <div>
          <p className="eyebrow">Investor Thesis</p>
          <h2>A place-led hospitality asset designed around emotion, scarcity, and expansion.</h2>
        </div>
        <div className="panel">
          <h3>Why Koreai is investable</h3>
          <p>Koreai is not simply accommodation. It is a premium experience product built around water arrival, forest immersion, low-density privacy, farm-to-table programming, and authentic Guyanese destination development.</p>
          <div className="tags"><span>Eco-tourism</span><span>Agri-tourism</span><span>Premium stays</span><span>Rural destination</span></div>
        </div>
      </section>

      <section id="highlights" className="section dark">
        <p className="eyebrow">Investment Highlights</p>
        <h2>A premium retreat product with multiple paths to value creation.</h2>
        <div className="cards">
          {highlights.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="economics" className="section">
        <p className="eyebrow">Phase 1A Economics</p>
        <h2>Clear capital target, focused launch inventory, and scalable revenue mix.</h2>
        <div className="economics">
          {economics.map(([label, value]) => (
            <div key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
        </div>
      </section>

      <section className="section imageBand">
        <div>
          <p className="eyebrow">Signature Experience</p>
          <h2>Arrival by water. A morning ritual at the Dawn Deck. Luxury defined by stillness.</h2>
        </div>
        <p>Guests move through a layered sequence: forest pause point, boardwalk, lounge deck above the creek, and lower boat landing in the mist. This makes the experience marketable before the full retreat ecosystem is complete.</p>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Investor Contact</p>
          <h2>Request the investor package or schedule a site discussion.</h2>
          <p className="muted">Use this landing page to convert serious investors, tourism partners, JV partners, lenders, and strategic collaborators into qualified conversations.</p>
          <div className="contactList">
            <a href="mailto:info@koreaifarmretreat.com">info@koreaifarmretreat.com</a>
            <a href="tel:+5926421248">{phone}</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp: {phone}</a>
            <span>Essequibo River region, near Bartica, Guyana</span>
          </div>
        </div>

        <form className="form" action="https://formspree.io/f/mykoznbp" method="POST">
          <label>Name<input name="name" required placeholder="Your name" /></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label>Interest
            <select name="interest">
              <option>Investment discussion</option>
              <option>Joint venture / development partnership</option>
              <option>Hospitality or operating partner</option>
              <option>Lender / blended capital discussion</option>
              <option>Tourism / government / agency discussion</option>
              <option>Site visit or retreat inquiry</option>
            </select>
          </label>
          <label>Message<textarea name="message" required placeholder="Tell us how you would like to connect." /></label>
          <button className="button gold submit" type="submit">Request Investor Package</button>
        </form>
      </section>

      <footer>© 2026 Koreai Farms & Retreat • koreaifarmretreat.com</footer>
    </main>
  );
}
