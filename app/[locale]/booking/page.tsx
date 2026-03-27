import BookingPageContent from "./bookingPageContent"
import NewsModule from "@/modules/News/News"

const Booking = async() => {
  return (
    <div>
      <BookingPageContent />
      <NewsModule/>
    </div>
  )
}

export default Booking