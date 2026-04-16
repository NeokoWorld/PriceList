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

  const blocks = [
    {
      title: t.do,
      icon: '✅',
      items: data.content_policy.allowed,
      type: 'good',
    },
    {
      title: t.dont,
      icon: '❌',
      items: data.content_policy.forbidden,
      type: 'bad',
    },
    {
      title: t.maybe,
      icon: '❓',
      items: data.content_policy.unsure,
      type: 'neutral',
    },
  ];

  return (
    <section>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>
        {lang === 'fr' ? 'Conditions' : 'Rules'}
      </h2>

      <div className="grid grid-3 dodont-grid">
        {blocks.map((block) => (
          <div key={block.title} className={`card dodont-card ${block.type}`}>
            
            <h3 className="dodont-title">
              {block.icon} {block.title}
            </h3>

            <ul className="dodont-list">
              {block.items.map((item: string) => (
                <li key={item} className="dodont-item">
                  {item}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}