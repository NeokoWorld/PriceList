export default function DoDont({ data, lang }: any) {
  const text = {
    fr: {
      do: 'Je fais',
      dont: 'Je ne fais pas',
      maybe: 'À discuter',
    },
    en: {
      do: 'Will do',
      dont: "Won't do",
      maybe: 'Maybe',
    },
  };
  const t = text[lang as keyof typeof text];

  return (
    <section className="grid grid-3">
      <div className="policy-box">
        <h3 className="policy-yes">✅ {t.do}</h3>
        <ul>
          {data.content_policy.allowed.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="policy-box">
        <h3 className="policy-no">❌ {t.dont}</h3>
        <ul>
          {data.content_policy.forbidden.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="policy-box">
        <h3 className="policy-maybe">❓ {t.maybe}</h3>
        <ul>
          {data.content_policy.unsure.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
