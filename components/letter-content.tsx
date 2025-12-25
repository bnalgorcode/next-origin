'use client';

export default function LetterContent() {
  const letters = [
    { id: 1, title: 'The match you bet on has already ended, please check.', date: '2025-8-3 21:42:40' },
    { id: 2, title: 'The match you bet on has already ended, please check.', date: '2025-8-3 21:42:40' },
    { id: 3, title: 'The match you bet on has already ended, please check.', date: '2025-8-3 21:42:40' },
  ];

  return (
    <div>
      {/* Mobile Title */}
      <h4 className="text-lg font-semibold mb-4 text-white md:hidden">Letter</h4>
      
      {/* Letter Table */}
      <div className="overflow-x-auto mb-4 mt-2 -mx-2 md:mx-0">
        <table className="min-w-full bg-black/40 text-xs md:text-sm">
          <thead>
            <tr>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Number</th>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Title</th>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Date</th>
              <th className="px-2 md:px-4 py-2 md:py-3 bg-[#1f2937] text-center font-semibold text-[#d1d5db] border-b border-[#374151]">Action</th>
            </tr>
          </thead>
          <tbody>
            {letters.map((letter) => (
              <tr
                key={letter.id}
                className="border-b border-[#374151]/50 hover:bg-[#1f2937]/30 transition-colors cursor-pointer"
              >
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{letter.id}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{letter.title}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white text-center">{letter.date}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                  <button className="text-[#f87171] hover:text-[#ef4444] transition-colors px-1">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

