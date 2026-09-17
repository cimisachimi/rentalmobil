export interface Car {
  id: string;
  name: string;
  type: string;
  transmission: string;
  capacity: number;
  priceIdr: number;
  imageUrl: string;
}

export const rentalCars: Car[] = [
  {
    id: 'avanza-fwd',
    name: 'Toyota All New Avanza',
    type: 'MPV',
    transmission: 'CVT / Manual',
    capacity: 7,
    priceIdr: 450000,
    imageUrl: '/images/avanza.jpg'
  },
  {
    id: 'innova-reborn',
    name: 'Toyota Innova Reborn Diesel',
    type: 'Premium MPV',
    transmission: 'Automatic',
    capacity: 7,
    priceIdr: 650000,
    imageUrl: '/images/innova.jpg'
  }
];