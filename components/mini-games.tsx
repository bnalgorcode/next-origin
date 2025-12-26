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
          className="game-card relative w-full"
          style={{
            backgroundImage: 'url(/images/bg/game-card-bg3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Image
            src={`/images/mini/${game.wrapper}.png`}
            alt={game.wrapper}
            width={300}
            height={260}
            className="game-card-main w-full object-cover"
          />
          <div className="game-card-logo-container absolute w-full h-[30%] bottom-0 left-0 flex items-center justify-center bg-black/50 transition-all duration-300">
            <Image
              src={`/images/mini/logo/${game.logo}.png`}
              alt={`${game.logo} logo`}
              width={150}
              height={80}
              className="game-card-logo absolute max-w-[50%] left-1/2 transform -translate-x-1/2 z-10 max-h-[80px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

