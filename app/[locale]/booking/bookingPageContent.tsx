"use client"

import { useState, SubmitEvent } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useQuery, useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

import HeroMenu from "@/components/heroMenu"
import { DownPhoneIcon, UpAdressIcon, UpMailIcon } from "@/public/icons"
import { Link } from "@/i18n/navigation"
import { createReservation, getTables } from "@/service/getAll"
import { Table } from "@/@types/mainTypes"

const BookingPageContent = () => {
  const t = useTranslations("Bookings")
  
  const [email, setEmail] = useState("")
  const [guestCount, setGuestCount] = useState<number>(1)
  const [reservationDate, setReservationDate] = useState("")
  const [reservationTime, setReservationTime] = useState("")
  const [selectedTableId, setSelectedTableId] = useState<number>(0)

  const { data: tablesData } = useQuery({
    queryKey: ["tables"],
    queryFn: getTables
  })

  const mutation = useMutation({
    mutationFn: () => createReservation(
      email, 
      reservationDate, 
      reservationTime, 
      guestCount, 
      selectedTableId
    ),
    onSuccess: () => {
      setEmail("")
      setReservationDate("")
      setReservationTime("")
      setSelectedTableId(0)
      setGuestCount(1)
    }
  })

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email || !reservationDate || !reservationTime || !selectedTableId) {
      return toast.error("Barcha maydonlarni to'ldiring")
    }

    mutation.mutate()
  }

  return (
    <div className="containers mt-7.5! pt-13.75! px-17! pb-25! bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.4)_100%)] rounded-[50px] !mb-[71px] pb-[71px]">
      <HeroMenu />
      
      <h2 className="text-[#626464] text-[18px] leading-[150%] mt-[115px]">
        {t("page")} / <span className="text-black">{t("title")}</span>
      </h2>

      <div className="mt-[31px]">
        <h2 className="text-center text-[48px]">{t("title")}</h2>
        <div className="flex items-center justify-between mt-[56px]">
          <div className="w-[554px]">
            <h3 className="text-[#000000] text-[32px] leading-[150%]">{t("subtitle")}</h3>
            <div className="flex flex-col gap-[24px] mt-[36px]">
              {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map((day) => (
                <div key={day} className="flex items-center justify-between border-b border-b-[#000000]">
                  <strong className="text-black text-[20px] leading-[150%]">{t(day)}</strong>
                  <span className="text-black text-[20px] leading-[150%]">{t("bookingTimeOne")}</span>
                </div>
              ))}
              <div className="flex items-center justify-between border-b border-b-[#000000]">
                <strong className="text-black text-[20px] leading-[150%]">{t("sunday")}</strong>
                <span className="text-black text-[20px] leading-[150%]">{t("bookingTimeTwo")}</span>
              </div>
            </div>
          </div>
          <Image src="/images/order-img.png" alt="order" width={503} height={676} />
        </div>
      </div>

      <div className="mt-[71px]">
        <h2 className="text-center text-[48px]">{t("bookingTitle")}</h2>
        <div className="relative w-full max-w-[902px] mx-auto rounded-2xl mt-[54px]">
          <form onSubmit={handleSubmit} className="relative w-full mx-auto rounded-2xl">
            <div className="flex flex-col gap-6">
              
              <div className="border-b border-gray-400 pb-2">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none text-[#585858] placeholder-gray-500"
                />
              </div>

              <div className="border-b border-gray-400 pb-2">
                <select 
                  className="w-full bg-transparent outline-none text-[#585858]" 
                  value={guestCount} 
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} kishi</option>
                  ))}
                </select>
              </div>

              <div className="border-b border-gray-400 pb-2 flex items-center">
                <input
                  type="date"
                  required
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                  className="w-full bg-transparent outline-none text-[#585858]"
                />
              </div>

              <div className="border-b border-gray-400 pb-2 flex items-center">
                <input
                  type="time"
                  required
                  value={reservationTime}
                  onChange={(e) => setReservationTime(e.target.value)}
                  className="w-full bg-transparent outline-none text-[#585858]"
                />
              </div>

              <div className="border-b border-gray-400 pb-2">
                <select 
                  required
                  className="w-full bg-transparent outline-none text-[#585858]"
                  value={selectedTableId}
                  onChange={(e) => setSelectedTableId(Number(e.target.value))}
                >
                  <option value="">Stolni tanlang</option>
                  {tablesData?.data?.map((table: Table) => (
                    <option key={table.id} value={table.id}>
                       Stol #{table.id} ({table.capacity} kishilik)
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="ml-auto mt-4 bg-black text-white py-[18px] rounded-full w-[169px] cursor-pointer disabled:bg-gray-400"
              >
                {mutation.isPending ? "..." : "Забронировать"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-[54px]">
        <h2 className="text-center text-[48px] text-[#000000] leading-[150%]">{t("contact")}</h2>
        <div className="flex items-center justify-between w-[804px] mx-auto mt-[81px]">
          <div className="flex flex-col items-center justify-center max-w-[169px]">
            <UpMailIcon />
            <h3 className="text-black text-[24px] mb-[2px] mt-[27px]">{t('write')}</h3>
            <Link href="mailto:info@bmgsoft.com">info@bmgsoft.com</Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <DownPhoneIcon />
            <h3 className="text-black text-[24px] mb-[2px] mt-[27px]">{t('write')}</h3>
            <Link href="tel:+9998908767888">+9998908767888</Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <UpAdressIcon />
            <h3 className="text-black text-[24px] mb-[2px] mt-[27px]">{t('write')}</h3>
            <span>{t('address')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPageContent