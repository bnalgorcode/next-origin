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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-3">
      {miniGames.map((game, index) => (
        <div
          key={index}
          className="relative rounded-[10px] overflow-hidden transition-all duration-300 border border-[#b5f4fe] hover:scale-105"
          style={{
            backgroundImage: 'url(/images/bg/game-card-bg2.png)',
          }}
        >
          <div className="relative">
            <Image
              src={`/images/mini/${game.wrapper}.png`}
              alt={game.wrapper}
              width={300}
              height={200}
              className="w-full object-cover transition-transform duration-500 hover:scale-110"
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
            className="absolute w-[50%] left-1/2 bottom-[4%] transform -translate-x-1/2 z-10"
          />
        </div>
      ))}
    </div>
  );
}

