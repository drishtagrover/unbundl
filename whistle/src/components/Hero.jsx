import { useState } from 'react';
import '../cssFiles/Hero.css';
import Girl from "../assets/Girl.png";
import ClinicBanner from './ClinicBanner';

export default function Hero() {
  const [hasGaps, setHasGaps] = useState(null);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  return (
    <>
      {/* Announcement bar */}
      <div className="hero-announce">
        Starting at <s>Rs 69,999</s> Rs 47,999. Hurry! Offer ends soon.
      </div>

      <section className="hero">
        <div className="hero__inner">
          <div className="hero__text">
            <h1 className="hero__heading">Invisible Aligners for a dream smile</h1>
            <p className="hero__sub">
              Book a Scan and avail a free<br />
              Orthodontist Consult <span className="hero__sub--highlight">worth ₹1500</span>
            </p>
          </div>
          <div className="hero__image-wrap">
            <img src={Girl} alt="Woman with perfect smile" className="hero__photo" />
          </div>
        </div>
      </section>

      <div className="hero__form-block">
        <div className="hero__form-inner">
          <p className="hero__form-label">Do you have Teeth Gaps or Crooked Teeth?</p>

          <div className="hero__radio-group">
            <label className={`hero__radio ${hasGaps === true ? 'hero__radio--active' : ''}`}>
              <input type="radio" name="gaps" onChange={() => setHasGaps(true)} />
              <span className="hero__radio-dot" />
              Yes
            </label>
            <label className={`hero__radio ${hasGaps === false ? 'hero__radio--active' : ''}`}>
              <input type="radio" name="gaps" onChange={() => setHasGaps(false)} />
              <span className="hero__radio-dot" />
              No
            </label>
          </div>

          <div className="hero__inputs">
            <div className="hero__input-wrap">
              <label className="hero__input-label">Full Name*</label>
              <input
                className="hero__input"
                type="text"
                placeholder="Ajay Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="hero__input-wrap">
              <label className="hero__input-label">Mobile number*</label>
              <div className="hero__phone-row">
                <span className="hero__phone-prefix">+91</span>
                <input
                  className="hero__input hero__input--phone"
                  type="tel"
                  placeholder="Mobile number*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <button className="hero__submit">Book a Free Scan</button>
          </div>

          <p className="hero__consent">
            <input type="checkbox" /> I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
          </p>
        </div>
      </div>
      <ClinicBanner />
    </>
  );
}