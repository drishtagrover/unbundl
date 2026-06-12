import React from "react";
import "../cssFiles/Results.css"

// Replace these imports with your actual image files
import before1 from "../assets/before1.png"
import after1 from "../assets/after1.png";
import before2 from "../assets/before2.png";
import after2 from "../assets/after2.png";
import before3 from "../assets/before3.png";
import after3 from "../assets/after3.png";
import before4 from "../assets/before4.png";
import after4 from "../assets/after1.png";

const cases = [
  {
    id: 1,
    before: before1,
    after: after1,
    concern: "Gaps",
    duration: "8 months",
  },
  {
    id: 2,
    before: before2,
    after: after2,
    concern: "Crooked Teeth",
    duration: "8 months",
  },
  {
    id: 3,
    before: before3,
    after: after3,
    concern: "Open Bite",
    duration: "8 months",
  },
  {
    id: 4,
    before: before4,
    after: after4,
    concern: "Protruding Teeth",
    duration: "8 months",
  },
];

export default function Results() {
  return (
    <section className="results-section">
      <h2 className="results-title">Results You'll Love</h2>

      <div className="results-grid">
        {cases.map((c) => (
          <div className="case-card" key={c.id}>
            {/* Images Row */}
            <div className="case-images">
              <div className="case-image-block">
                <img
                  src={c.before}
                  alt={`Before - ${c.concern}`}
                  className="case-img"
                />
                <span className="image-label">Before</span>
              </div>
              <div className="case-image-block">
                <img
                  src={c.after}
                  alt={`After - ${c.concern}`}
                  className="case-img"
                />
                <span className="image-label">After</span>
              </div>
            </div>

            {/* Info Row */}
            <div className="case-info">
              <div className="case-row">
                <span className="info-key">Concern</span>
                <span className="info-val">{c.concern}</span>
              </div>
              <div className="case-row">
                <span className="info-key">Treatment Duration</span>
                <span className="info-val">{c.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}