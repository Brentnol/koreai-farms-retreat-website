import React, { useState } from "react";

const phone = "+592 642 1248";
const whatsapp = "https://wa.me/5926421248";
const logoData = "data:image/webp;base64,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";

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
          <span className="brandMark"><img src={logoData} alt="Koreai Farms & Retreat logo" /></span>
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
            <p className="pill"><span className="miniMark"><img src={logoData} alt="Koreai logo" /></span> Premium Eco-Retreat Investment Opportunity • Guyana</p>
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
