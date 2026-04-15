export default function Contact({ lang }: { lang: 'fr' | 'en' }) {
  const text = {
    fr: { title: 'Contact', form: 'Formulaire' },
    en: { title: 'Contact', form: 'Form' },
  };
  const formUrl = {
    fr: 'https://forms.gle/rxffbrqr858pTraS6',
    en: 'https://forms.gle/A4aMBJaWmBDnqAXP6',
  };

  return (
    <section className="hero">
      <h2>{text[lang].title}</h2>

      <p>Discord : @sera_fins</p>
      <p>Email : neo33.pro@gmail.com</p>

      <a href={formUrl[lang]} className="button button-success">
        {text[lang].form}
      </a>
    </section>
  );
}
