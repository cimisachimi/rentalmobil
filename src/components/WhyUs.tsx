import { useTranslations } from 'next-intl';

export default function WhyUs() {
  const t = useTranslations('whyUs');
  const points = t.raw('points') as Array<{ title: string; desc: string }>;

  return (
    <section id="why-us" className="py-16 px-4 bg-slate-50 border-t">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((pt, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border">
              <h3 className="font-semibold text-slate-900 mb-2">{pt.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}