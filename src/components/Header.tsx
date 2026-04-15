export default function Header({ lang }: { lang: 'fr' | 'en' }) {
  const text = {
    fr: {
      title: 'Serafins - Commissions ouvertes',
      subtitle: 'Humanoïdes • Créatures • Fantasy • Character design',
      desc: 'Illustrations personnalisées, expressives et adaptées à vos personnages.',
      cta: 'Commander une commission',
      portfolio: 'Voir le portfolio',
      note: 'Réponses sous 24–72h • Travail 100% personnalisé',
    },
    en: {
      title: 'Serafins - Open Commissions',
      subtitle: 'Humanoids • Creatures • Fantasy • Character design',
      desc: 'Custom illustrations made for your characters with care and expression.',
      cta: 'Order a commission',
      portfolio: 'View portfolio',
      note: 'Replies within 24–72h • 100% custom work',
    },
  };

  return (
    <section className="hero">
      {/* TITLE */}
      <h1>{text[lang].title}</h1>

      {/* SUBTITLE */}
      <p style={{ fontSize: '18px', marginTop: '12px' }}>
        {text[lang].subtitle}
      </p>

      {/* DESCRIPTION */}
      <p
        style={{
          maxWidth: '650px',
          margin: '14px auto 0',
          fontSize: '15px',
          lineHeight: '1.6',
        }}
      >
        {text[lang].desc}
      </p>

      {/* CTA BUTTONS */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '28px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="https://forms.gle/rxffbrqr858pTraS6"
          className="button button-primary"
        >
          {text[lang].cta}
        </a>

        <a
          href="https://neokoworld.notion.site/Portfolio-Serafins-62b6fc8b7ca34f69bab727fe82dc9f1b"
          target="_blank"
          className="button button-secondary"
        >
          {text[lang].portfolio}
        </a>
      </div>

      {/* TRUST LINE */}
      <p
        style={{
          marginTop: '18px',
          fontSize: '13px',
          color: 'var(--muted)',
          opacity: 0.85,
        }}
      >
        {text[lang].note}
      </p>

      {/* SMALL HIGHLIGHT TAGS */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '18px',
          flexWrap: 'wrap',
        }}
      >
        <span style={tagStyle}>Custom art</span>
        <span style={tagStyle}>Character design</span>
        <span style={tagStyle}>Fast communication</span>
      </div>
    </section>
  );
}

const tagStyle: React.CSSProperties = {
  fontSize: '12px',
  padding: '6px 10px',
  borderRadius: '999px',
  border: '1px solid rgba(255,255,255,0.1)',
  color: 'var(--muted)',
};
