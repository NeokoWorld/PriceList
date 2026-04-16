export default function Process({ data, lang }: any) {
  const text = {
    fr: {
      title: 'Process',
      steps: [
        'Commande via formulaire',
        'Paiement 50% (Paypal)',
        'Sketch + retours (2 révisions incluses)',
        'Paiement final',
        'Rendu final + livraison',
      ],
      rulesTitle: 'Informations importantes',
      rules: [
        'Paiement non remboursable (sauf annulation de ma part)',
        'Usage personnel uniquement (x2 pour usage commercial)',
        'Délais : 2 semaines → 2 mois selon complexité',
        'Les prix sont en dollars ($)',
      ],
      output: 'Livraison',
    },
    en: {
      title: 'Process',
      steps: [
        'Order via form',
        '50% upfront payment (Paypal)',
        'Sketch + feedback (2 revisions included)',
        'Final payment',
        'Final render + delivery',
      ],
      rulesTitle: 'Important info',
      rules: [
        'Payment is non-refundable (unless I cancel)',
        'Personal use only (x2 for commercial use)',
        'Delivery time: 2 weeks → 2 months depending on complexity',
        'Prices are in USD ($)',
      ],
      output: 'Delivery',
    },
  };

  return (
    <section>
      <h2>{text[lang].title}</h2>

      {/* ===== STEPS ===== */}
      <div className="grid grid-5 process-steps">
        {text[lang].steps.map((step: string, i: number) => (
          <div key={i} className="card process-card">
            <span className="step-number">{i + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>

      {/* ===== RULES ===== */}
      <div className="card" style={{ marginTop: 30 }}>
        <h3>{text[lang].rulesTitle}</h3>
        <ul>
          {text[lang].rules.map((rule: string) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>

      {/* ===== OUTPUT ===== */}
      <div className="card" style={{ marginTop: 20 }}>
        <h3>{text[lang].output}</h3>
        <p>{data.rules.output.join(', ')}</p>
      </div>
    </section>
  );
}