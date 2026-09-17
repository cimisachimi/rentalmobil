'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/src/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'id' ? 'en' : 'id';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md border text-sm font-semibold hover:bg-slate-100 transition"
    >
      {locale === 'id' ? 'EN' : 'ID'}
    </button>
  );
}