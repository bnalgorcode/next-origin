import Image from 'next/image';

const miniGames = [
  { wrapper: 'mini1', logo: 'eos1pb' },
  { wrapper: 'mini1', logo: 'eos2pb' },
  { wrapper: 'mini1', logo: 'eos3pb' },
  { wrapper: 'mini1', logo: 'eos4pb' },
  { wrapper: 'mini1', logo: 'eos5pb' },
  { wrapper: 'mini1', logo: 'bepick' },
  { wrapper: 'mini1', logo: 'powerball' },
  { wrapper: 'mini1', logo: 'poverballgame' },
  { wrapper: 'mini1', logo: 'dhpowerball' },
];

export default function MiniGames() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5 md:gap-3">
      {miniGames.map((game, index) => (
        <div
          key={index}
          className="relative w-full rounded-[10px] overflow-hidden transition-all duration-300 border border-[#e2b5fe] hover:scale-105 min-h-[220px] sm:min-h-[240px] md:min-h-[260px]"
          style={{
            backgroundImage: 'url(/images/bg/game-card-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative w-full h-full min-h-[220px] sm:min-h-[240px] md:min-h-[260px]">
            <Image
              src={`/images/mini/${game.wrapper}.png`}
              alt={game.wrapper}
              width={300}
              height={260}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="absolute bottom-0 w-full h-[35%]"
              style={{
                background: 'linear-gradient(to bottom, transparent, black)',
              }}
            />
          </div>
          <Image
            src={`/images/mini/logo/${game.logo}.png`}
            alt={`${game.logo} logo`}
            width={150}
            height={80}
            className="absolute w-[50%] left-1/2 bottom-[4%] transform -translate-x-1/2 z-10 max-w-[120px] sm:max-w-[140px] md:max-w-[150px]"
          />
        </div>
      ))}
    </div>
  );
}

