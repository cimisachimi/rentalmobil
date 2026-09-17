import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-8 border-t text-center text-xs text-slate-500">
      <p>© {new Date().getFullYear()} JogjaDrive. {t('rights')}</p>
    </footer>
  );
}