export default function Process({ data, lang }: any) {
  const text = {
    fr: {
      title: 'Process',
      order: 'Commande via formulaire',
      sketch: 'Sketch + retours',
      final: 'Paiement final',
      delivery: 'Livraison',
      formats: 'Formats livrés',
      commercial: 'Usage commercial',
    },
    en: {
      title: 'Process',
      order: 'Order via form',
      sketch: 'Sketch + feedback',
      final: 'Final payment',
      delivery: 'Delivery',
      formats: 'Delivered formats',
      commercial: 'Commercial use',
    },
  };

  return (
    <section>
      <h2>{text[lang].title}</h2>

      <ol>
        <li>{text[lang].order}</li>
        <li>{data.rules.payment.join(' / ')}</li>
        <li>{text[lang].sketch}</li>
        <li>{text[lang].final}</li>
        <li>
          {text[lang].delivery} ({data.rules.delivery.min} →{' '}
          {data.rules.delivery.max})
        </li>
      </ol>

      <p>
        {text[lang].formats} : {data.rules.output.join(', ')}
      </p>
      <p>
        {text[lang].commercial} : {data.rules.commercial_use}
      </p>
    </section>
  );
}
