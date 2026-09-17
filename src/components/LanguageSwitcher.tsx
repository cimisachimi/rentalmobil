'use client';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const nextLocale = locale === 'id' ? 'en' : 'id';

    // Set cookie untuk menyimpan preferensi bahasa
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;

    // Refresh halaman di URL yang sama (/) agar server membaca cookie baru
    router.refresh();
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