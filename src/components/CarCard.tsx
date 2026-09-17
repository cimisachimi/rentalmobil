import { useTranslations, useLocale } from 'next-intl';
import { Car } from '@/src/data/cars';

export default function CarCard({ car }: { car: Car }) {
  const t = useTranslations('fleet');
  const locale = useLocale();

  const formattedPrice = new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(car.priceIdr);

  const waText = encodeURIComponent(
    locale === 'id'
      ? `Halo, saya ingin sewa ${car.name} di Jogja.`
      : `Hello, I would like to rent ${car.name} in Jogja.`
  );

  return (
    <div className="border rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between">
      <div>
        <div className="h-48 bg-slate-100 rounded-xl mb-4 flex items-center justify-center font-medium text-slate-400">
          {car.name} Image
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">{car.name}</h3>
        <p className="text-sm text-slate-500 mb-4">{car.type}</p>
        <div className="flex gap-4 text-xs text-slate-600 mb-6">
          <span>⚙️ {car.transmission}</span>
          <span>👥 {car.capacity} Seats</span>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <span className="text-2xl font-black text-slate-900">{formattedPrice}</span>
          <span className="text-xs text-slate-500">{t('perDay')}</span>
        </div>
        <a
          href={`https://wa.me/6281234567890?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-slate-900 text-white font-medium py-2.5 rounded-lg hover:bg-slate-800 transition"
        >
          {t('bookNow')}
        </a>
      </div>
    </div>
  );
}