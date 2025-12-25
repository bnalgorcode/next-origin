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
            <tr className="border-b border-gray-600/50">
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Number</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Title</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Date</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-left text-white font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {letters.map((letter) => (
              <tr
                key={letter.id}
                className="border-b border-gray-600/30 hover:bg-black/60 transition-colors cursor-pointer"
              >
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{letter.id}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{letter.title}</td>
                <td className="px-2 md:px-4 py-2 md:py-3 text-white">{letter.date}</td>
                <td className="px-2 md:px-4 py-2 md:py-3">
                  <button className="text-red-400 hover:text-red-300 transition-colors">
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

