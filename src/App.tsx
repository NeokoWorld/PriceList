import { useState, useEffect, useMemo } from 'react';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import DoDont from './components/DoDont';
import Process from './components/Process';
import Contact from './components/Contact';
import LanguageSwitch from './components/LanguageSwitch';
import CockpitThemeHUD from './components/CockpitThemeHUD';

import { load } from 'js-yaml';
import frRaw from './data/prices-fr.yaml?raw';
import enRaw from './data/prices-en.yaml?raw';

import './styles/themes.css';
import './styles/cleaned.css';

export default function App() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  // load saved language
  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') setLang(saved);
  }, []);

  // persist language
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // parse YAML safely (important)
  const fr = useMemo(() => load(frRaw) as any, []);
  const en = useMemo(() => load(enRaw) as any, []);

  const data = lang === 'fr' ? fr : en;

  // safety fallback (évite page blanche)
  if (!data) return null;

  return (
    <div className="app-wrapper">
      <LanguageSwitch lang={lang} setLang={setLang} />
      
      <CockpitThemeHUD />
      
      <div className="app-surface">
        <Header lang={lang} />
        <Gallery lang={lang} />
        <Pricing data={data} lang={lang} />
        <DoDont data={data} lang={lang} />
        <Process data={data} lang={lang} />
        <Contact lang={lang} />
      </div>
    </div>
  );
}
