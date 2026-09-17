import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-black text-slate-900">JogjaDrive</span>
        <nav className="flex items-center gap-6">
          <a href="#fleet" className="text-sm font-medium hover:text-blue-600">{t('fleet')}</a>
          <a href="#why-us" className="text-sm font-medium hover:text-blue-600">{t('whyUs')}</a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}