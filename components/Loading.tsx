function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-3xl p-8 animate-pulse space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-700 rounded-sm"></div>
            <div className="w-24 h-8 bg-gray-700 rounded"></div>
          </div>
          <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
        </div>

        <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto"></div>

        <div className="grid grid-cols-2 gap-5">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;
