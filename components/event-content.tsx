'use client';

export default function EventContent() {
  const events = [
    { id: 1, title: 'Wishing you have a great time', date: '2025-8-3 21:42:40' },
    { id: 2, title: 'Wishing you have a great time', date: '2025-8-3 21:42:40' },
    { id: 3, title: 'Wishing you have a great time', date: '2025-8-3 21:42:40' },
    { id: 4, title: 'Wishing you have a great time', date: '2025-8-3 21:42:40' },
    { id: 5, title: 'Wishing you have a great time!!', date: '2025-8-3 21:42:40' },
  ];

  return (
    <div>
      {/* Mobile Title */}
      <h4 className="text-lg font-semibold mb-4 text-white md:hidden">Event</h4>
      
      {/* Event Table */}
      <div className="overflow-x-auto mb-4 mt-2 -mx-2 md:mx-0">
        <table className="min-w-full bg-black/40 text-xs md:text-sm">
          <thead>
            <tr className="border-b border-gray-600/50">
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Number</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Title</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr
                key={event.id}
                className="border-b border-gray-600/30 hover:bg-black/60 transition-colors cursor-pointer"
              >
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{event.id}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{event.title}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{event.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-1 md:gap-2 mt-4 flex-wrap">
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-gray-400 cursor-not-allowed text-xs md:text-sm">
          <i className="fa fa-angle-left"></i>
        </button>
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-[#33e1ea]/20 border border-[#33e1ea] rounded-md text-[#33e1ea] font-bold text-xs md:text-sm">1</button>
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-white hover:bg-[#33e1ea]/20 transition-colors text-xs md:text-sm">2</button>
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-white hover:bg-[#33e1ea]/20 transition-colors text-xs md:text-sm">3</button>
        <button className="px-2 md:px-3 py-1.5 md:py-2 bg-black/60 border border-[#33e1ea]/50 rounded-md text-white hover:bg-[#33e1ea]/20 transition-colors text-xs md:text-sm">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

