import { useTranslations } from 'next-intl';
import { rentalCars } from '@/src/data/cars';
import CarCard from './CarCard';

export default function FleetSection() {
  const t = useTranslations('fleet');

  return (
    <section id="fleet" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">{t('title')}</h2>
        <p className="text-slate-600 mt-2">{t('subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rentalCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}