import Advantages from "@/modules/Advantages/Advantages";
import Booking from "@/modules/Booking/Booking";
import Dishes from "@/modules/Dishes/Dishes";
import Hero from "@/modules/Hero/Hero";
import NewsModule from "@/modules/News/News";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Dishes/>
      <Booking/>
      <Advantages/>
      <NewsModule />
    </div>
  );
}
