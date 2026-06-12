import { useEffect, useRef, useState } from 'react';
import '../cssFiles/DreamSmiles.css';
import image3 from '../assets/image3.png'; 
// import predictableSmile from '..assets/predictable-smile';
// import priceIcon from '../assets/price.svg';

const MARQUEE_ITEMS = [
  ['Our biggest launch', ' benefit'],
  ['Free teeth scans', ' worth ₹500'],
  ['Free Orthodontic consultation', ' worth ₹750'],
];

const BENEFITS = [
  {
    // icon: predictableSmile,
    title: 'Predictable smile',
    description:
      'An innovative 3D modeling lets Dr. simulate your treatment plan so you can visualize your perfect smile before it happens.',
  },
  {
    // icon: priceIcon,
    title: 'Transparent Pricing',
    description:
      'Everything is included — from scans to aligners. No surprise charges. Know exactly what your treatment costs from day one.',
  },
];

export default function DreamSmiles() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Green Marquee Strip */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">
              <strong>{item[0]}</strong>{item[1]}
              <span className="marquee-sep">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Dream Smiles Section */}
      <section className="dream" ref={sectionRef}>
        <div className="dream__inner">
          {/* Left: Headline + body */}
          <div className={`dream__left ${visible ? 'dream__left--visible' : ''}`}>
            <h2 className="dream__heading">
              Dream smiles<br />
              achieved secretly
            </h2>
            <p className="dream__body">
              Experience the superior quality of our 97.5% Invisibly worn treatment in
              an easy 3 step process. With over 10,000+ satisfied customers, Whistle
              is redefining smile transformations across India.
            </p>
            <p className="dream__body">
              The pricing is different for every case. Cases with higher complexity requiring more aligners and additional time and effort from our dentists.
            </p>
            
          </div>

          {/* Right: Whistle Aligners Pricing Card */}
          <div className={`dream__right ${visible ? 'dream__right--visible' : ''}`}>
            <div className="aligner-card">
              <div className="aligner-card__top">
                <div className="aligner-card__text">
                  <h3 className="aligner-card__title">Whistle Aligners</h3>
                  <div className="aligner-card__pricing">
                    <span className="aligner-card__original">₹84,000</span>
                    <p className="aligner-card__starting">
                      starting at <span className="aligner-card__price">₹47,999</span>
                    </p>
                    <p className="aligner-card__tax">inc. of all taxes</p>
                  </div>
                </div>
                <div className="aligner-card__image-wrap">
                  <img src={image3} alt="Whistle Aligners case" className="aligner-card__image" />
                </div>
              </div>

              <div className="aligner-card__divider" />

              <ul className="aligner-card__benefits">
                <li>
                  <span className="aligner-card__check">✓</span>
                  Offer valid for a limited time
                </li>
                <li>
                  <span className="aligner-card__check">✓</span>
                  Easy financing options
                </li>
              </ul>

              <a href="#" className="aligner-card__cta">
                Learn more <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}