'use client';

export default function NoticeContent() {
  const notices = [
    { id: 1, title: 'Welcome to ToTo Club', date: '2025-8-3 21:42:40' },
    { id: 2, title: 'Welcome to ToTo Club', date: '2025-8-3 21:42:40' },
    { id: 3, title: 'Welcome to ToTo Club', date: '2025-8-3 21:42:40' },
    { id: 4, title: 'Welcome to ToTo Club', date: '2025-8-3 21:42:40' },
    { id: 5, title: 'Welcome to ToTo Club', date: '2025-8-3 21:42:40' },
  ];

  return (
    <div>
      {/* Mobile Title */}
      <h4 className="text-lg font-semibold mb-4 text-white md:hidden">Notice</h4>
      
      {/* Notice Table */}
      <div className="overflow-x-auto mb-4 mt-2 -mx-2 md:mx-0">
        <table className="min-w-full bg-black/40 text-xs md:text-sm">
          <thead>
            <tr>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Number</th>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Title</th>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Date</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr
                key={notice.id}
                className="border-b border-[rgba(55,65,81,0.5)] hover:bg-[rgba(31,41,55,0.3)] transition-colors cursor-pointer"
              >
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{notice.id}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{notice.title}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{notice.date}</td>
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
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#33e1ea] text-white font-semibold text-xs md:text-sm">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#0b8dad] hover:text-white transition-colors text-xs md:text-sm">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#0b8dad] hover:text-white transition-colors text-xs md:text-sm">3</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1f2937] text-[#d1d5db] hover:bg-[#0b8dad] hover:text-white transition-colors text-xs md:text-sm">
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

