import React from 'react';

export default function Gallery({ lang }: { lang: 'fr' | 'en' }) {
  const images = {
    fr: [
      { src: '/img1.webp', label: 'Full Render • Complex BG — 35$' },
      { src: '/Suriel.gif', label: 'Chibi • Col • Flat • GIF — 26$' },
      { src: '/syolrn.png', label: 'Full Render — 25$' },
    ],
    en: [
      { src: '/img1.webp', label: 'Full Render • Complex BG — $35' },
      { src: '/Suriel.gif', label: 'Chibi • Flat • GIF — $26' },
      { src: '/syolrn.png', label: 'Full Render — $25' },
    ],
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">
        {lang === 'fr' ? 'Exemples' : 'Examples'}
      </h2>

      <div className="grid grid-3 gallery-grid">
        {images[lang].map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img.src} className="gallery-img" />

            <div className="gallery-overlay">
              <span className="gallery-label">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}