import { useMemo, useState } from 'react';

export default function Pricing({ data, lang }: any) {
  const text = {
    fr: {
      title: 'Prix',
      packs: '⭐ Packs',
      base: 'Base',
      finishes: 'Finitions',
      line: 'Line',
      bg: 'Background',
      extras: 'Extras',
      summary: 'Résumé',
      total: 'Total',
      reset: 'Reset',
      back: 'Retour',
      next: 'Suivant',
      finish: 'Terminer',
      note: '💡 Les packs sont recommandés',
      aLaCarte: '🧾 À la carte',
    },
    en: {
      title: 'Pricing',
      packs: '⭐ Packages',
      base: 'Base',
      finishes: 'Finishes',
      line: 'Line',
      bg: 'Background',
      extras: 'Extras',
      summary: 'Summary',
      total: 'Total',
      reset: 'Reset',
      back: 'Back',
      next: 'Next',
      finish: 'Finish',
      note: '💡 Packages are recommended',
      aLaCarte: '🧾 Custom',
    },
  };

  // ================= STATE =================
  const [step, setStep] = useState(0);

  const [selected, setSelected] = useState({
    pack: null as any,
    base: null as any,
    finish: null as any,
    line: null as any,
    bg: null as any,
    extras: [] as any[],
  });

  const isRefSheet = selected.base?.id === 'ref_sheet';

  // ================= TOTAL =================
  const total = useMemo(() => {
    if (selected.pack) return selected.pack.price;

    let sum = 0;

    if (selected.base) sum += selected.base.price;
    if (selected.finish) sum += selected.finish.price;
    if (selected.line) sum += selected.line.price;
    if (selected.bg) sum += selected.bg.price;

    selected.extras.forEach((e: any) => {
      sum += e.price;
    });

    return sum;
  }, [selected]);

  // ================= RESET =================
  const reset = () => {
    setStep(0);
    setSelected({
      pack: null,
      base: null,
      finish: null,
      line: null,
      bg: null,
      extras: [],
    });
  };

  // ================= HELPERS =================
  const selectPack = (pack: any) => {
    setSelected({
      pack,
      base: null,
      finish: null,
      line: null,
      bg: null,
      extras: [],
    });

    setStep(999); // 👉 ajout
  };

  const startCustom = () => {
    setSelected((prev) => ({
      ...prev,
      pack: null,
    }));

    setStep(1);
  };

  const selectBase = (item: any) => {
    setSelected((prev) => ({
      ...prev,
      base: item,
      pack: null,
    }));

    if (item.id === 'ref_sheet') {
      setStep(999);
    } else {
      setStep(2);
    }
  };

  const selectSingle = (key: string, item: any) => {
    setSelected((prev) => ({
      ...prev,
      [key]: prev[key]?.id === item.id ? null : item,
    }));
  };

  const toggleExtra = (item: any) => {
    if (selected.pack) return;

    setSelected((prev) => {
      const exists = prev.extras.find((e) => e.id === item.id);

      return {
        ...prev,
        extras: exists
          ? prev.extras.filter((e) => e.id !== item.id)
          : [...prev.extras, item],
      };
    });
  };

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));

  const canGoNext = useMemo(() => {
    if (step === 1) return selected.base !== null;
    if (step === 2) return selected.finish !== null;
    if (step === 3) return selected.line !== null;
    if (step === 4) return selected.bg !== null;
    return true;
  }, [step, selected]);

  const isFinished = selected.pack || step === 999;

  // ================= SUMMARY =================
  const Summary = () => (
    <div className="card" style={{ position: 'sticky', top: 20 }}>
      <h3>{text[lang].summary}</h3>

      <p>
        {selected.pack
          ? `Pack: ${selected.pack.name}`
          : selected.base
          ? `Base: ${selected.base.name}`
          : '—'}
      </p>

      <p>
        <strong>
          {text[lang].total}: {total}
          {data.currency}
        </strong>
      </p>

      <button className="button button-secondary" onClick={reset}>
        {text[lang].reset}
      </button>
    </div>
  );

  // ================= UI =================
  return (
    <section>
      <h2>{text[lang].title}</h2>

      <div className="pricing-layout">
        {/* LEFT */}
        <div>
          {/* ================= STEP 0 PACKS ================= */}
          {step === 0 && (
            <>
              <h3>{text[lang].packs}</h3>

              <div className="grid grid-3">
                {data.packs.map((pack: any) => (
                  <div
                    key={pack.id}
                    className={`card ${
                      selected.pack?.id === pack.id ? 'selected' : ''
                    }`}
                    onClick={() => selectPack(pack)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3>⭐ {pack.name}</h3>
                    <p>
                      <strong>
                        {pack.price}
                        {data.currency}
                      </strong>
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
                <button
                  className="button button-secondary"
                  onClick={startCustom}
                  style={{margin: 'auto'}}
                >
                  {text[lang].aLaCarte}
                </button>
              </div>

              <p style={{ marginTop: 10, color: 'var(--muted)' }}>
                {text[lang].note}
              </p>
            </>
          )}

          {/* ================= STEP 1 BASE ================= */}
          {step === 1 && !selected.pack && (
            <>
              <h3>{text[lang].base}</h3>

              <div className="grid grid-3">
                {data.base_prices.map((item: any) => (
                  <div
                    key={item.id}
                    className={`card ${
                      selected.base?.id === item.id ? 'selected' : ''
                    }`}
                    onClick={() => selectBase(item)}
                  >
                    <h3>{item.name}</h3>
                    <p>
                      {item.price}
                      {data.currency}
                    </p>

                    {item.fixed && (
                      <small style={{ color: 'var(--muted)' }}>
                        Fixed price
                      </small>
                    )}
                  </div>
                ))}
              </div>

              <button className="button button-secondary" onClick={back}>
                {text[lang].back}
              </button>
            </>
          )}

          {/* ================= STEP 2 FINISH ================= */}
          {step === 2 && !selected.pack && !isRefSheet && (
            <>
              <h3>{text[lang].finishes}</h3>

              <div className="grid grid-3">
                {data.finishes.map((item: any) => (
                  <div
                    key={item.id}
                    className={`card ${
                      selected.finish?.id === item.id ? 'selected' : ''
                    }`}
                    onClick={() => selectSingle('finish', item)}
                  >
                    <h3>{item.name}</h3>
                    <p>
                      +{item.price}
                      {data.currency}
                    </p>
                  </div>
                ))}
              </div>

              <button className="button button-secondary" onClick={back}>
                {text[lang].back}
              </button>

              <button
                className="button button-primary"
                onClick={next}
                disabled={!canGoNext}
                style={{ opacity: !canGoNext ? 0.5 : 1 }}
              >
                {text[lang].next}
              </button>
            </>
          )}

          {/* ================= STEP 3 LINE ================= */}
          {step === 3 && !selected.pack && !isRefSheet && (
            <>
              <h3>{text[lang].line}</h3>

              <div className="grid grid-3">
                {data.line_styles.map((item: any) => (
                  <div
                    key={item.id}
                    className={`card ${
                      selected.line?.id === item.id ? 'selected' : ''
                    }`}
                    onClick={() => selectSingle('line', item)}
                  >
                    <h3>{item.name}</h3>
                    <p>
                      +{item.price}
                      {data.currency}
                    </p>
                  </div>
                ))}
              </div>

              <button className="button button-secondary" onClick={back}>
                {text[lang].back}
              </button>

              <button
                className="button button-primary"
                onClick={next}
                disabled={!canGoNext}
                style={{ opacity: !canGoNext ? 0.5 : 1 }}
              >
                {text[lang].next}
              </button>
            </>
          )}

          {/* ================= STEP 4 BG ================= */}
          {step === 4 && !selected.pack && !isRefSheet && (
            <>
              <h3>{text[lang].bg}</h3>

              <div className="grid grid-3">
                {data.backgrounds.map((item: any) => (
                  <div
                    key={item.id}
                    className={`card ${
                      selected.bg?.id === item.id ? 'selected' : ''
                    }`}
                    onClick={() => selectSingle('bg', item)}
                  >
                    <h3>{item.name}</h3>
                    <p>
                      +{item.price}
                      {data.currency}
                    </p>
                  </div>
                ))}
              </div>

              <button className="button button-secondary" onClick={back}>
                {text[lang].back}
              </button>

              <button
                className="button button-primary"
                onClick={next}
                disabled={!canGoNext}
                style={{ opacity: !canGoNext ? 0.5 : 1 }}
              >
                {text[lang].next}
              </button>
            </>
          )}

          {/* ================= STEP 5 EXTRAS ================= */}
          {step === 5 && !selected.pack && !isRefSheet && (
            <>
              <h3>{text[lang].extras}</h3>

              <div className="grid grid-3">
                {data.extras.map((item: any) => (
                  <div
                    key={item.id}
                    className={`card ${
                      selected.extras.find((e: any) => e.id === item.id)
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() => toggleExtra(item)}
                  >
                    <h3>{item.name}</h3>
                    <p>
                      +{item.price}
                      {data.currency}
                    </p>
                  </div>
                ))}
              </div>

              <button className="button button-secondary" onClick={back}>
                {text[lang].back}
              </button>

              <button
                className="button button-success"
                onClick={() => setStep(999)}
              >
                {text[lang].finish}
              </button>
            </>
          )}

          {/* ================= FINAL ================= */}
          {isFinished && (
            <div className="card">
              <h3>Done ✨</h3>
              <p>
                {text[lang].total}: {total}
                {data.currency}
              </p>
              <p style={{ color: 'var(--muted)' }}>Go to contact form 👇</p>
            </div>
          )}
        </div>

        {/* RIGHT SUMMARY */}
        <Summary />
      </div>
    </section>
  );
}
