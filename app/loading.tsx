export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-3 text-center">
        <div className="w-12 h-12 rounded-full border-4 border-t-black/80 border-black/20 animate-spin mx-auto"></div>
        <p className="text-black/70 text-sm">Loading...</p>
      </div>
    </div>
  )
}
