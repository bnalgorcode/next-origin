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
            <tr>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Number</th>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Title</th>
              <th className="px-2 md:px-4 py-2 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr
                key={event.id}
                className="border-b border-[rgba(55,65,81,0.5)] hover:bg-[rgba(31,41,55,0.3)] transition-colors cursor-pointer"
              >
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{event.id}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{event.title}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{event.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-1 mt-4 flex-wrap">
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] cursor-not-allowed opacity-50 text-xs md:text-sm">
          <i className="fa fa-angle-left"></i>
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#c233ea] text-white font-semibold text-xs md:text-sm">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#710bad] hover:text-white transition-colors text-xs md:text-sm">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#710bad] hover:text-white transition-colors text-xs md:text-sm">3</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#710bad] hover:text-white transition-colors text-xs md:text-sm">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

