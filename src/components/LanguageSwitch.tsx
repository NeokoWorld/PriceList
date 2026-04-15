type Props = {
  lang: 'fr' | 'en';
  setLang: (l: 'fr' | 'en') => void;
};

export default function LanguageSwitch({ lang, setLang }: Props) {
  return (
    <div className="lang-switch">
      <button
        onClick={() => setLang('fr')}
        className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
      >
        🇫🇷 FR
      </button>

      <button
        onClick={() => setLang('en')}
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
