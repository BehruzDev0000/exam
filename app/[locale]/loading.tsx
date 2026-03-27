export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-md">
      
      <div className="flex flex-col items-center gap-4">
        
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

        <p className="text-black text-sm tracking-wide animate-pulse">
          Loading...
        </p>

      </div>
    </div>
  )
}