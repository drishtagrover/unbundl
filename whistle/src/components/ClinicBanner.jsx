import '../cssFiles/ClinicBanner.css';
import cloveLogo from '../assets/clove.png';
import { useState } from 'react';

export default function ClinicBanner() {
  const [open, setOpen] = useState(false);

  return (
    <div className="clinic-banner">
      <div className="clinic-banner__inner">
        <p className="clinic-banner__text">
          Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.
        </p>
        <div className="clinic-banner__right">
          <img src={cloveLogo} alt="Clove Dental" className="clinic-banner__logo" />
          <button className="clinic-banner__find" onClick={() => setOpen(!open)}>
            Find Clinic <span className={`clinic-banner__chevron ${open ? 'clinic-banner__chevron--up' : ''}`}>&#8964;</span>
          </button>
        </div>
      </div>
    </div>
  );
}