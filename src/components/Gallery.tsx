export default function Gallery({ lang }: { lang: 'fr' | 'en' }) {
  const images = {
    fr: [
      { src: '/img1.webp', label: 'Full Render, Complexe BG — 35$' },
      { src: '/Suriel.gif', label: 'Chibi,Flat,Colored Line,GIF — 26$' },
      { src: '/syolrn.png', label: 'Full Render — 25$' },
    ],
    en: [
      { src: '/img1.webp', label: 'Full Render, Complexe BG — $35' },
      { src: '/Suriel.gif', label: 'Chibi,Flat,Colored Line,GIF — $26' },
      { src: '/syolrn.png', label: 'Full Render — $25' },
    ],
  };

  return (
    <section className="grid grid-3">
      {images[lang].map((img, i) => (
        <div key={i} className="gallery-item">
          <img src={img.src} className="gallery-img" />
          <span className="gallery-label">{img.label}</span>
        </div>
      ))}
    </section>
  );
}
