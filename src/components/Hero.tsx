import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="py-20 text-center px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-slate-600 mb-8">{t('subtitle')}</p>
        <a
          href="#fleet"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:bg-blue-700 transition"
        >
          {t('cta')}
        </a>
      </div>
    </section>
  );
}