import Hero from '@/modules/Hero/Hero';
import Dishes from '@/modules/Dishes/Dishes';
import Booking from '@/modules/Booking/Booking';
import Advantages from '@/modules/Advantages/Advantages';
import News from '@/modules/News/News';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Dishes />
      <Booking />
      <Advantages />
      <News />
    </div>
  );
}

