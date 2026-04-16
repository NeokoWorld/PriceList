import React from 'react';

export default function Contact({ lang }: { lang: 'fr' | 'en' }) {
  const text = {
    fr: {
      title: 'Contact',
      subtitle: 'Une question ou envie de commander ?',
      form: 'Commander via formulaire',
      discord: 'Me contacter sur Discord',
      email: 'Envoyer un email',
      note: 'Réponse sous 24–72h',
    },
    en: {
      title: 'Contact',
      subtitle: 'Have a question or want to commission?',
      form: 'Order via form',
      discord: 'Contact me on Discord',
      email: 'Send an email',
      note: 'Reply within 24–72h',
    },
  };

  const formUrl = {
    fr: 'https://forms.gle/rxffbrqr858pTraS6',
    en: 'https://forms.gle/A4aMBJaWmBDnqAXP6',
  };

  return (
    <section className="contact-section">
      {/* TITLE */}
      <h2>{text[lang].title}</h2>
      <p className="contact-subtitle">{text[lang].subtitle}</p>

      {/* CONTACT CARDS */}
      <div className="grid grid-3 contact-grid">
        
        {/* DISCORD */}
        <a
          href="https://discord.com/channels/@me" // remplace par ton lien
          target="_blank"
          rel="noopener noreferrer"
          className="card contact-card"
        >
          <h3>Discord</h3>
          <p>@sera_fins</p>
          <span className="contact-hint">{text[lang].discord}</span>
        </a>

        {/* EMAIL */}
        <a
          href="mailto:neo33.pro@gmail.com"
          className="card contact-card"
        >
          <h3>Email</h3>
          <p>neo33.pro@gmail.com</p>
          <span className="contact-hint">{text[lang].email}</span>
        </a>

        {/* FORM */}
        <a
          href={formUrl[lang]}
          target="_blank"
          rel="noopener noreferrer"
          className="card contact-card highlight"
        >
          <h3>Form</h3>
          <p>{text[lang].form}</p>
        </a>

      </div>

      {/* MAIN CTA */}
      <div className="contact-cta">
        <a
          href={formUrl[lang]}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-success"
        >
          {text[lang].form}
        </a>

        <p className="contact-note">{text[lang].note}</p>
      </div>
    </section>
  );
}